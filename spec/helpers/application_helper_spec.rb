# frozen_string_literal: true

require "rails_helper"

describe ApplicationHelper do
  let(:current_user) { create(:user) }

  it "generates user json" do
    json = helper.user_json(current_user)
    parsed = nil

    expect { parsed = JSON.parse(json) }.not_to raise_error
    expect(parsed["id"]).to eq(current_user.id)
    expect(parsed["email"]).to eq(current_user.email)
  end
end
