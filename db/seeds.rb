# frozen_string_literal: true

if Rails.env.development?
  User.create!(email: "user@example.com",
               password: "password",
               password_confirmation: "password") if User.find_by(email: "user@example.com").nil?

  Admin.create!(email: "admin@example.com",
                password: "password",
                password_confirmation: "password") if Admin.find_by(email: "admin@example.com").nil?
end
