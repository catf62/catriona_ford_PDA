require('minitest/autorun')
require('minitest/rg')
require_relative('test_code_1')
require( 'pry-byebug' )

class AnimalsTest < Minitest::Test

  # def test_add_animals_to_array
  #   extra_beast = "hippo"
  #   animals1 = Animal.new()
  #   assert_equal(["monkey", "horse", "tiger", "hippo"],animals1.add_animals_to_array(extra_beast))
  # end

  # def test_number_of_animals
  #   animal_hashes = {
  #     'animal name' => "Bubbles",
  #     'animal type' =>  "Monkey",
  #     'number of legs' => 4,
  #     'tail' => true
  #   },
  #   {
  #     'animal name' => "Strudel",
  #     'animal type' =>  "Rabbit",
  #     'number of legs' => 4,
  #     'tail' => true
  #   },
  #   {
  #     'animal name' => "Twiglet",
  #     'animal type' =>  "Hedgehog",
  #     'number of legs' => 4,
  #     'tail' => false
  #   }
  #   animals1 = Animal.new()
  #   assert_equal(3, animals1.number_of_animals(animal_hashes))
  # end

  def test_add_animals_to_array
    animals1 = Animal.new()
    animal_array = ["monkey", "horse", "tiger", "hippo"]
    assert_equal(["hippo", "horse",  "monkey", "tiger"],animals1.sort_animals(animal_array))
  end


end
