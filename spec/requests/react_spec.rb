require "rails_helper"

RSpec.describe "Reacts", type: :request do
  describe "GET /" do
    it "returns http success" do
      get "/app"
      expect(response).to have_http_status(:success)
    end
  end
end