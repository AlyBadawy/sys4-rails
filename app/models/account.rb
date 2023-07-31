# frozen_string_literal: true

class Account < ApplicationRecord
  has_paper_trail

  validates :email, presence: true,
                    format: /\A\S+@\S+\z/,
                    uniqueness: { case_sensitive: false }
end
