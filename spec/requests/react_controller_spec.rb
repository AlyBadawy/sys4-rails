# frozen_string_literal: true

require "rails_helper"

RSpec.describe ReactController do
  describe "GET /app" do
    it "returns http success" do
      get "/app"
      expect(response).to have_http_status(:success)
    end
  end
end
