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
  complexity: 1,
  previous_move: 'Board A: 1. … @e6',
  instruction: 'Alex to play and win',
  board1_FEN: 'r1bq1bkr/ppp3pp/2n1p3/3Bp3/8/5Q2/PPPP1PPP/RNB1K2R',
  board2_FEN: 'rnbqkb1r/ppp2ppp/5n2/3p4/2PP4/5N2/PP3PPP/RNBQKB1R',
  board1_spare: { 'wK':0, 'wQ':0, 'wR':0, 'wB':0, 'wN':0, 'wP':1, 'bK':0, 'bQ':0, 'bR':0, 'bB':0, 'bN':0, 'bP':1 },
  board2_spare: { 'wK':0, 'wQ':0, 'wR':0, 'wB':0, 'wN':1, 'wP':1, 'bK':0, 'bQ':0, 'bR':0, 'bB':0, 'bN':1, 'bP':1 },
  explanation: 'In bughouse, players should always be aware of what pieces they can drop. Alex has a pawn which can be placed anywhere between ranks 2 and 7 inclusive. Placing it on f7 checkmates!',
  solution: [ '1/wP/spare/f7' ]
})

puzzle2 = Puzzle.create!({
  title: 'T2',
  complexity: 1,
  previous_move: 'Board A: 1. … Kf8',
  instruction: 'Alex to play and win',
  board1_FEN: 'rnbq1k1r/pppp1Bp1/5n1p/4p1N1/4P3/8/PPPP1KPP/RNBQ3R',
  board2_FEN: 'rnbqk2r/pp3ppp/2p2n2/3p4/3P4/2PB1N2/P1P2PPP/R1BQK2R',
  board1_spare: { 'wK':0, 'wQ':0, 'wR':0, 'wB':0, 'wN':1, 'wP':1, 'bK':0, 'bQ':0, 'bR':0, 'bB':1, 'bN':0, 'bP':1 },
  board2_spare: { 'wK':0, 'wQ':0, 'wR':0, 'wB':1, 'wN':0, 'wP':1, 'bK':0, 'bQ':0, 'bR':0, 'bB':0, 'bN':0, 'bP':1 },
  explanation: 'In bughouse, knights, bishops, rooks and queens can be placed on any empty square on your board. Alex placing a knight on g6 checkmates the black king!',
  solution: [ '1/wN/spare/g6' ]
})

puzzle3 = Puzzle.create!({
  title: 'T3',
  complexity: 1,
  previous_move: 'Board A: 1. … gxh6',
  instruction: 'Alex to play and win',
  board1_FEN: 'r1bqkb1r/pppnp2p/3p3p/3Bp3/3PP3/5N2/PPP2PPP/RN1QK2R',
  board2_FEN: 'r1bq1k1r/pppp3p/2n3pp/3BQ2n/3BP3/2NP4/PPP2KPP/R5NR',
  board1_spare: { 'wK':0, 'wQ':0, 'wR':0, 'wB':1, 'wN':0, 'wP':0, 'bK':0, 'bQ':0, 'bR':0, 'bB':1, 'bN':1, 'bP':0 },
  board2_spare: { 'wK':0, 'wQ':0, 'wR':0, 'wB':0, 'wN':0, 'wP':1, 'bK':0, 'bQ':0, 'bR':0, 'bB':0, 'bN':0, 'bP':1 },
  explanation: 'Alex could have considered 2. B@h5+, which would look like checkmate in traditional chess. However, in bughouse, black could reply with 2. P@g6, preventing any immediate checkmates for Alex. \/n Such a mistake can sometimes cause the tables to turn as Gary can now stop moving and let his partner Carl continue the fatal attack. Bonus: Carl to play and mate in 3.',
  solution: [ '1/wB/spare/f7' ]
})
