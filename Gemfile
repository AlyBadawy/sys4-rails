# frozen_string_literal: true

source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"

gem "rails", "~> 7.0.6"

gem "activeadmin"
gem "bootsnap", require: false
gem "devise"
gem "devise-jwt"
gem "hashdiff"
gem "jbuilder"
gem "jsbundling-rails"
gem "paper_trail"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "rack-cors", "~> 2.0"
gem "rails_semantic_logger"
gem "sassc"
gem "sprockets-rails"
gem "stimulus-rails"
gem "tailwindcss-rails", "~> 2.0"
gem "turbo-rails"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]

group :development, :test do
  gem "capybara"
  gem "database_cleaner"
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem "dotenv-rails"
  gem "factory_bot_rails"
  gem "faker"
  gem "pry-byebug"
  gem "pry-rails"
  gem "rspec-rails"
  gem "shoulda-matchers"
end

group :development do
  gem "bundle-audit"
  gem "fasterer"
  gem "overcommit"
  gem "rack-mini-profiler"
  gem "rubocop"
  gem "rubocop-config-prettier"
  gem "rubocop-performance"
  gem "rubocop-rails"
  gem "rubocop-rspec"
  gem "scss_lint"
  gem "web-console"
end

group :test do
  gem "brakeman"
  gem "selenium-webdriver"
  gem "simplecov"
end
