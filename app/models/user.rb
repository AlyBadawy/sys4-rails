# frozen_string_literal: true

class User < Account
  include Devise::JWT::RevocationStrategies::Allowlist

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable,
         :trackable, :timeoutable, :confirmable,
         :jwt_authenticatable, jwt_revocation_strategy: AllowlistedJwt

  self.skip_session_storage = [:http_auth, :params_auth]

  def jwt_payload
    { "Provider" => "SYS4" }
  end

  def to_json(*args)
    {
      id: id,
      firstName: first_name,
      lastName: last_name,
      email: email,
      unconfirmedEmail: unconfirmed_email,
      createdAt: created_at,
      updatedAt: updated_at,
    }.to_json(*args)
  end
end
