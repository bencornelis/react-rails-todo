class Todo < ApplicationRecord
  scope :complete,   -> { where(completed: true) }
  scope :incomplete, -> { where(completed: false) }

  def self.filter(params)
    params[:completed] ? where(completed: params[:completed]) : all
  end
end
