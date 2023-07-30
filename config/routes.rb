# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admins

  scope :api, defaults: { format: :json } do
    devise_for :users,
               controllers: {
                 sessions: "users/sessions",
                 registrations: "users/registrations",
                 confirmations: "users/confirmations",
                 passwords: "users/passwords",
               }

    scope :account do
      resources :allowlisted_jwts, only: %i[index show update destroy]
    end
  end

  # root "react#index"
  get "/app", to: "react#app"
  get "*path", to: "react#index"
end
