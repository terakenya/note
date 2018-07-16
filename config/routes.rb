Rails.application.routes.draw do
  devise_for :users
  root 'articles#index'
  resources :articles do
    resources :comments, only: [:create]
  end
  resources :menu, only: [:index, :show]
  resources :articles do
    resources :likes, only: [:create, :destroy]
  end
  resources :users do
    resources :menu, only: [:index]
  end
  resources :users

end

