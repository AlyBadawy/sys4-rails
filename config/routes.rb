# frozen_string_literal: true

Rails.application.routes.draw do
  # root "react#index"
  get "/app", to: "react#app"
  get "*path", to: "react#index"
end