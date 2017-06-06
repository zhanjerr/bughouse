Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'home#index'

  get '/signup' => 'users#new'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'

  resources :users, only: [:create]
  resources :puzzles, only: [:index, :show]

  namespace :admin do
    root to: 'users#index'
    resources :users, only: [:update, :index]
  end


end
