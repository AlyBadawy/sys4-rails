# frozen_string_literal: true

class ApplicationController < ActionController::Base
  skip_before_action :verify_authenticity_token, if: :json_request?
  before_action :configure_permitted_parameters, if: :devise_controller?

  def current_jti
    token = request.headers["Authorization"]&.split(" ")&.last
    return nil unless token

    # rubocop:disable Style/RescueStandardError
    begin
      JWT.decode(token, Rails.application.credentials.devise_jwt_secret_key!).first["jti"]
    rescue
      nil
    end
    # rubocop:enable Style/RescueStandardError
  end

  protected

  def configure_permitted_parameters
    devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name])
  end

  def json_request?
    request.format.json?
  end
end
