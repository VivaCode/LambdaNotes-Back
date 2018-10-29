
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('notes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('notes').insert([
        {id: 1, title: 'The fat cat sat on the mat', textbody: 'Cat ipsum dolor sit amet, being gorgeous with belly side up and friends are not food so throw down all the stuff in the kitchen. Purr for no reason missing until dinner time human clearly uses close to one life a night no one naps that long so i revive by standing on chestawaken!. Warm up laptop with butt lick butt fart rainbows until owner yells pee in litter box hiss at cats damn that dog , for attack feet, for all of a sudden cat goes crazy. '},
        {id: 2, title: 'Happy Text', textbody: 'We might as well make some Almighty mountains today as well, what the heck. Dont fight it, use what happens. All kinds of happy little splashes.'},
        {id: 3, title: 'Humblebrag', textbody: 'Try-hard vaporware kickstarter irony air plant ethical, leggings gluten-free. Fashion axe austin next level master cleanse swag hella tousled vice bicycle rights unicorn wayfarers. Helvetica wayfarers lumbersexual authentic meh shabby chic austin synth jean shorts.'}
      ]);
    });
};
