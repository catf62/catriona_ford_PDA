### Testing task 1:

# Carry out static testing on the code below.
# Comment on any errors that you see below.
```ruby
### Testing task 2 code:

# Carry out static testing on the code below.
# Correct the errors below that you spotted in task 1.

require_relative('card.rb')
# require_relative should not need the .rb, require_relative('card') would work ok
class CardGame

  # No initialize method for CardGame class


  def checkforAce(card)
# function title should be written in snake case - def check_for_ace(card)
    if card.value = 1
# in the line above a comparison is being made so it should have a == and read if card.value == 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
 # dif should be def
 # there should be a comma between card1 and card 2 - (card1, card2)
  if card1.value > card2.value
    return card.name
# return above should be card1, card.name has not been defined anywhere
  else
    card2
# both returns should be present or not present in the if/else statement above
  end
end
# the end above is not indented, meaning that the def highest_card function has no end
# the position of the end above also ends the CardGame class too early, resulting in the def self.cards_total function below falling outside of the class
end

def self.cards_total(cards)
  total
# total above should be set to zero - total = 0
  for card in cards
    total += card.value
    return "You have a total of" + total
# line above would be better with string interpolation e.g. "You have a total of {#total}", at the moment it will return something like ~You have a total of10~
  end
end


```
