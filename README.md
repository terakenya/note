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
- has_many :comment
- has_many :magazines
- belongs_to :text
- has_many :image
- belongs_to :tweet
- belongs_to :sound
- belongs_to :movie

## magazinテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|notes_id|id|null: false|

### Association
- has_many :notes

## movieテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|text|text|null: false|
|url|text|null: false|
|notes_id|id|null: false|

### Association
- belongs_to :notes

## soundテーブル

|Column|Type|Options|
|------|----|-------|
|title|string|null: false|
|text|text|null: false|
|notes_id|id|null: false|

### Association
- belongs_to :notes

##Tweetsテーブル

|Column|Type|Options|
|------|----|-------|
|text|string|null: false|
|image|text|
|note_id|id|null: false|

### Association
- belongs_to :notes

##Imagesテーブル

|Column|Type|Options|
|------|----|-------|
|image|text|null: false|
|title|string|null: false|
|text|string|
|note_id|id|null: false|

### Association
- belongs_to :notes
