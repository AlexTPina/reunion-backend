exports.seed = function (knex, Promise) {
    // Deletes ALL existing entries
    return knex('classmates')
      .del()
      .then(function() {
        // Inserts seed entries
        return knex('classmates').insert([
          {
            "name": "Margie Barber",
            "email": "margiebarber@pharmacon.com",
            "phone": "+1 (978) 466-3835",
            "address": "580 Court Square, Blandburg, Arizona, 597"
          },
          {
            "name": "Lucas Duke",
            "email": "lucasduke@zentility.com",
            "phone": "+1 (894) 530-2979",
            "address": "412 Meadow Street, Matheny, Maryland, 4085"
          },
          {
            "name": "Mclaughlin Price",
            "email": "mclaughlinprice@vitricomp.com",
            "phone": "+1 (924) 445-2706",
            "address": "936 Furman Street, Bellamy, Puerto Rico, 4447"
          },
          {
            "name": "Lindsay Cantrell",
            "email": "lindsaycantrell@panzent.com",
            "phone": "+1 (842) 451-2423",
            "address": "736 McKinley Avenue, Washington, American Samoa, 1312"
          },
          {
            "name": "Carter Kline",
            "email": "carterkline@zerbina.com",
            "phone": "+1 (849) 423-3668",
            "address": "825 Interborough Parkway, Waverly, Florida, 4370"
          },
          {
            "name": "Beatriz Benton",
            "email": "beatrizbenton@isoswitch.com",
            "phone": "+1 (944) 452-3319",
            "address": "853 Bergen Court, Independence, Kansas, 6498"
            },
        ]);
    });
};