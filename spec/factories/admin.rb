# frozen_string_literal: true

# Usage: FactoryBot.create(:admin)

FactoryBot.define do
  factory :admin do
    email { Faker::Internet.email }
    password { "passW0rd" }
  end
end
