# frozen_string_literal: true

# Usage: FactoryBot.create(:user)

FactoryBot.define do
  factory :user do
    email { Faker::Internet.email }
    password { "passW0rd" }
  end
end
