json.array! @users do |user|
  json.name     user.nickname
  json.id       user.id
  json.usericon user.usericon.url
end
