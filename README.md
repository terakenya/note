## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false, unique: true|
|password|string|null: false|
### Association
- has_many :notes
- has_many :magazines

## notesテーブル
|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|comment|references|null: false, foreign_key: true|
|text|references|null: false, foreign_key: true|
|image|references|null: false, foreign_key: true|
|tweet|references|null: false, foreign_key: true|
|sound|references|null: false, foreign_key: true|
|movie|references|null: false, foreign_key: true|
### Association
- belongs_to :user
- has_many :comments
- has_many :magazines
- belongs_to :text
- has_many :images
- belongs_to :tweet
- belongs_to :sound
- belongs_to :movie

## magazinsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|notes_id|id|null: false|
### Association
- has_many :notes

## moviesテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|text|text|
|url|text|null: false|
|note_id|id|null: false|
### Association
- belongs_to :note

## soundsテーブル
|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|text|text|null: false|
|url|text|null: false|
|note_id|id|null: false|
### Association
- belongs_to :note

##tweetsテーブル
|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|image|text|
|note_id|id|null: false|
### Association
- belongs_to :note

##imagesテーブル
|Column|Type|Options|
|------|----|-------|
|image|text|null: false|
|title|string|null: false|
|text|string|
|note_id|id|null: false|
### Association
- belongs_to :note

## commentsテーブル
|Column|Type|Options|
|------|----|-------|
|content|text| null: false|
|note_id|id| null: false |
## association
belongs_to :note

## textsテーブル
|Column|Type|Options|
|------|----|-------|
|image|text|
|title|string|null: false|
|text|string|
|note_id|id| null: false |
## association
belongs_to :note
