# frozen_string_literal: true

class CanAccessFlipperUI
  def self.matches?(request)
    current_admin = request.env["warden"].user
    current_admin&.is_a?(Admin)
  end
end
