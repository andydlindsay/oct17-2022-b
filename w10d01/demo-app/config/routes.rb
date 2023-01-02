Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  # get 'login', to: 'users#login'
  # get 'login', action: :login, controller: 'users'

  # resources :characters, except: [:create, :index]

  # resources :characters

  # resources :poems

  resources :characters do
    resources :poems
  end
end
