source "https://rubygems.org"
git_source(:github) { |repo| "https://github.com/#{repo}.git" }

ruby "3.2.2"

gem "rails", "~> 7.0.6"

gem "sprockets-rails"
gem "pg", "~> 1.1"
gem "puma", "~> 5.0"
gem "jsbundling-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "jbuilder"
gem "tzinfo-data", platforms: %i[ mingw mswin x64_mingw jruby ]
gem "bootsnap", require: false
gem "sassc-rails"

group :development, :test do
  gem 'factory_bot_rails'
  gem 'faker'
end

group :development do
  gem "web-console"
  gem "rack-mini-profiler"
end

group :test do
  gem "rspec-rails"
  gem 'capybara'
  gem 'database_cleaner'
  gem "debug", platforms: %i[ mri mingw x64_mingw ]
  gem 'dotenv-rails'
  gem 'pry-byebug'
  gem 'pry-rails'
  gem 'shoulda-matchers'
  gem "selenium-webdriver"
  gem "simplecov"
  gem "webdrivers"
end

