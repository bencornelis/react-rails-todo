Rails.application.routes.draw do
  resources :todos do
    collection do
      delete 'clear_completed'
    end
  end
end
