# frozen_string_literal: true

class CreateAllowlistedJwts < ActiveRecord::Migration[7.0]
  def change
    create_table :allowlisted_jwts, id: :uuid do |t|
      t.string :jti, null: false
      t.string :aud, null: false
      t.datetime :exp, null: false
      t.references :user, foreign_key: { on_delete: :cascade, to_table: :accounts }, null: false, type: :uuid
      t.string :agent
      t.string :ip
      t.string :location
      t.string :device_type

      t.timestamps
    end

    add_index :allowlisted_jwts, :jti, unique: true
  end
end
