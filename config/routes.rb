# frozen_string_literal: true

Rails.application.routes.draw do
  devise_for :admins
  devise_for :users

  # root "react#index"
  get "/app", to: "react#app"
  get "*path", to: "react#index"
end
