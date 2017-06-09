# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
puts 'seeding data ...'

puts 'seeing users ...'

User.destroy_all

user1 = User.create!({
  user_name: 'root_user',
  email: 'root@user.com',
  password_digest: BCrypt::Password.create('1234'),
  admin: true
  })

user2 = User.create!({
  user_name: 'test_user',
  email: 'test@user.com',
  password_digest: BCrypt::Password.create('1234')
  })

puts 'seeding puzzles ...'

Puzzle.destroy_all

puzzle1 = Puzzle.create!({
  title: 'T1',
  difficulty: 1,
  # explanation: '',
  previous_move: 'Board A: 1. … @e6',
  instruction: 'Alex to play and win',
  board1_FEN: 'r1bq1bkr/ppp3pp/2n1p3/3Bp3/8/5Q2/PPPP1PPP/RNB1K2R',
  board2_FEN: 'rnbqkb1r/ppp2ppp/5n2/3p4/2PP4/5N2/PP3PPP/RNBQKB1R',
  board1_spare: { 'wK':0, 'wQ':0, 'wR':0, 'wB':0, 'wN':0, 'wP':1, 'bK':0, 'bQ':0, 'bR':0, 'bB':0, 'bN':0, 'bP':1 },
  board2_spare: { 'wK':0, 'wQ':0, 'wR':0, 'wB':0, 'wN':1, 'wP':1, 'bK':0, 'bQ':0, 'bR':0, 'bB':0, 'bN':1, 'bP':1 }
  })