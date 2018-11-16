require('minitest/autorun')
require('minitest/rg')
require_relative('card.rb')
require_relative('testing_task_2.rb')
require( 'pry-byebug' )

class CardGameTest < Minitest::Test


  # def setup
  #   @card1 = Card.new("Hearts", 1)
  # end


  def test_check_for_ace__ace
    card1 = Card.new("Hearts", 1)
    game1 = CardGame.new
    assert_equal(true, game1.check_for_ace(card1))
  end

  def test_check_for_ace__not_ace
    card1 = Card.new("Hearts", 7)
    game1 = CardGame.new
    assert_equal(false, game1.check_for_ace(card1))
  end


  def test_highest_card__cards_different
    card1 = Card.new("Hearts", 1)
    card2 = Card.new("Diamonds", 5)
    game1 = CardGame.new
    assert_equal(card2, game1.highest_card(card1, card2))
  end

  def test_highest_card__cards_same
    card1 = Card.new("Hearts", 1)
    card2 = Card.new("Diamonds", 1)
    game1 = CardGame.new
    assert_nil(game1.highest_card(card1, card2))
  end

  def test_cards_total
    card1 = Card.new("Hearts", 1)
    card2 = Card.new("Diamonds", 5)
    game1 = CardGame.new
    cards = [card1, card2]
    assert_equal("You have a total of 6", game1.cards_total(cards))
  end

end
