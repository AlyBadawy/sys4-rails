# frozen_string_literal: true

ActiveAdmin.setup do |config|
  config.site_title = "SYS4.dev"
  config.site_title_link = "/"
  config.default_namespace = :admin
  config.authentication_method = :authenticate_admin!
  config.current_user_method = :current_admin
  config.logout_link_path = :destroy_admin_session_path
  config.comments = false
  config.batch_actions = true
  config.filter_attributes = [:encrypted_password, :password, :password_confirmation]
  config.localize_format = :long
end

module NamespaceWithoutComments
  def register(resource_class, options = {}, &)
    super unless resource_class == ActiveAdmin::Comment
  end
end

module ActiveAdmin
  class Namespace
    prepend NamespaceWithoutComments
  end
end
