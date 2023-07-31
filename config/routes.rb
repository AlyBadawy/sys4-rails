# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admins, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  # flipper route
  constraints CanAccessFlipperUI do
    mount Flipper::UI.app(Flipper) => "/admin/flipper"
  end

  scope :api, defaults: { format: :json } do
    devise_for :users,
               controllers: {
                 sessions: "users/sessions",
                 registrations: "users/registrations",
                 confirmations: "users/confirmations",
                 passwords: "users/passwords",
               }

    get "/status/ok", to: "status#ok"

    scope :account do
      get "/me", to: "status#me"
      resources :allowlisted_jwts, only: %i[index show update destroy]
    end
  end

  root "react#app"
  # get "/app", to: "react#app"
  get "*path", to: "react#app"
end
