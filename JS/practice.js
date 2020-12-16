// Snow from https://codepen.io/radum/pen/xICAB

(function () {

    var COUNT = 300;
    var masthead = document.querySelector('.sky');
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');
    var width = masthead.clientWidth;
    var height = masthead.clientHeight;
    var i = 0;
    var active = false;

    function onResize() {
        width = masthead.clientWidth;
        height = masthead.clientHeight;
        canvas.width = width;
        canvas.height = height;
        ctx.fillStyle = '#FFF';

        var wasActive = active;
        active = width > 600;

        if (!wasActive && active)
            requestAnimFrame(update);
    }

    var Snowflake = function () {
        this.x = 0;
        this.y = 0;
        this.vy = 0;
        this.vx = 0;
        this.r = 0;

        this.reset();
    }

    Snowflake.prototype.reset = function() {
        this.x = Math.random() * width;
        this.y = Math.random() * -height;
        this.vy = 1 + Math.random() * 3;
        this.vx = 0.5 - Math.random();
        this.r = 1 + Math.random() * 2;
        this.o = 0.5 + Math.random() * 0.5;
    }

    canvas.style.position = 'absolute';
    canvas.style.left = canvas.style.top = '0';

    var snowflakes = [], snowflake;
    for (i = 0; i < COUNT; i++) {
        snowflake = new Snowflake();
        snowflake.reset();
        snowflakes.push(snowflake);
    }

    function update() {

        ctx.clearRect(0, 0, width, height);

        if (!active)
            return;

        for (i = 0; i < COUNT; i++) {
            snowflake = snowflakes[i];
            snowflake.y += snowflake.vy;
            snowflake.x += snowflake.vx;

            ctx.globalAlpha = snowflake.o;
            ctx.beginPath();
            ctx.arc(snowflake.x, snowflake.y, snowflake.r, 0, Math.PI * 2, false);
            ctx.closePath();
            ctx.fill();

            if (snowflake.y > height) {
                snowflake.reset();
            }
        }

        requestAnimFrame(update);
    }

    // shim layer with setTimeout fallback
    window.requestAnimFrame = (function(){
        return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
                window.setTimeout(callback, 1000 / 60);
            };
    })();

    onResize();
    window.addEventListener('resize', onResize, false);

    masthead.appendChild(canvas);
})();

var array=["Advent","Advent calendar","Angel","Announcement","Anticipation","Appreciation","Aroma","Artificial tree","Awe","Baby","Baking","Balsam","Beauty","Belief","Bells","Belonging","Bethlehem","Birth","Blessing","Blitzen","Blizzard","Blustery","Boots","Bough","Bow","Box","Boxing Day","Buche de Noel","Buffet","Camel","Candle","Candle light","Candy","Candy cane","Cap","Card","Caring","Carol","Carolers","Caroling","Carols","Cedar","Celebrate","Celebration","Ceremony","Charity","Cheer","Chestnuts","Children","Chill","Chimney","Chocolate","Christmas","Christmas card","Christmas carol","Christmas cookie","Christmas day","Christmas Eve","Christmas future","Christmas gift","Christmas lights","Christmas miracle","Christmas morning","Christmas pageant","Christmas past","Christmas play","Christmas present","Christmas star","Christmas tree","Christmas tree stand","Christmas wish","Christmastide","Church","Cider","Cloves","Coal","Comet","Comfort","Communication","Community","Companionship","Cookie","Cooking","Cornucopia","Counting","Cranberries","Cranberry sauce","Crèche","Crowds","There are many gifts under the Christmas tree, and the best one is you! TWEET THIS","Dancer","Dancing","Dasher","December","December 25","Decorate","Decorations","Display","Dolls","Donations","Donner","Dream","Dreidel","Dressing","Drinking","Duck","Eating","Ebenezer Scrooge","Effort","Eggnog","Elf","Elves","Email","Embrace","Emmanuel","Entertain","Entertainment","Epiphany","Eve","Evergreen","Exchange","Expectation","Faith","Familiar","Familiarity","Family","Family reunion","Father Christmas","Feast","Feliz Navidad","Fervor","Festival","Festive","Figgy pudding","Fir","Fireplace","Firewood","Flat-bread","Forgiveness","Frankincense","Freedom","Fresh snowfall","Friends","Friendship","Frosty","Frosty the snowman","Fruitcake","Gala","Garland","Gather","Gathering","Generations","Generosity","Ghost of Christmas past","Gift","Gift box","Gift exchange","Gift-giving","Gift list","Gingerbread","Gingerbread house","Gingerbread man","Gingerbread woman","Give","Glad tidings","Glitter","Gloria","God’s holy son","Gold","Goodwill","Goose","Gourmet","Grace","Gratitude","Gravy","Green","Greenery","Greens","Greetings","Grinch","Group","Guest","Ham","Hanukkah","Happiness","Hard sauce","Harvest","Heart","Heartland","Heaven","Heritage","Holding hands","Holiday","Holiness","Holly","Home","Homeward","Honor","Hope","Host","Hostess","Hot chocolate","Hot cider","Hug","Humility","Hymn","Ice","Ice skates/skating","Icicle","Illumination","Infant","Inn","Innocence","Invitation","Ivy","Jack Frost","Jack-in-the-box","Jerusalem","Jesus (Christ)","Jingle bells","Jolly","Joseph","Journey","Joy","Joyeux noel","Karamu","Kibbe","Kinara","King","King Wenselaus","Kiss","Krampus","Kris Kringle","Kwanzaa","Lantern","Laughter","Letter (to Santa)","Lighting","Lights","List","Little drummer boy","Log","Lord","Love","Luminaria","Lump of coal","Magi","Magic","Mail","Majesty","Manger","Mantle","Mary","Mass","Meat and spices","Memories","Menorah","Merriment","Merry Christmas","Message","Midnight","Mince pie","Mincemeat","Minister","Miracle (of Christmas)","Mirth","Mistletoe","Mittens","Mosque","Mrs. Claus (Jessica)","Music","Music box","Myrrh","Myths","Nativity","Naughty","Network","New fallen snow","Night before Christmas","Noel","North Pole","Nostalgia","Nut","Nutcracker","Nutmeg","Observance","Occasion","Open","Ornaments","Oven","Package","Packing","Pageant","Pageantry","Paper (whites)","Parade","Partridge","Party","Peace","Peace dove","Peppermint","Phone call","Pie","Pine","Pine tree","Pinecone","Pixie","Plum pudding","Poinsettia","Popcorn string","Post office","Prancer","Prayer","Presents","Pride","Priest","Prince of Peace","Priorities","Proclaim","Program","Prophecy","Pumpkin pie","Punch","Purity","Quality (time)","Quantity","Questions","Quince pie","Quirky","Rabbi","Ramadan","Reason for the season","Receive","Reconciliation","Red","Reflection","Refuge","Reindeer","Rejoice","Relationships","Relatives","Religion","Reminiscence","Resolutions","Return of light","Reunion","Reveal","Revel","Reverence","Ribbon","Ritual","Rooftop","Roots","Rudolph","Sack","Sacred","Saint Nicholas","Sales","Sanctuary","Santa Claus","Santa’s bag","Santa’s beard","Santa's elves","Santa's helpers","Santa's list","Santa’s sleigh","Santa's workshop","Sauce","Savior","Scarf","Scent","Scrooge","Season","Season's greetings","Secret Santa","Secular","Sending","Service","Sharing","Shepherd","Shopping","Silver","Silver bells","Skate","Sled","Sleigh","Sleigh bells","Snow","Snow angel","Snowball","Snowbound","Snowfall","Snowflake","Snowman","Sock","Singing","Songs","Spirit","Stable","Stand","Star","Star of David","Starlight","St. Nick","Stocking","Stocking stuffer","Straws (billygoat)","Stuffing","Sugarplum","Sundown","Surprise","Sun","Sustenance","Sweater","Symbol","Symbolism","Synagogue","Tannenbaum","Teddy bear","Temple","Tenderness","Texts","Thanks","Three Kings Day","Tidings","Tinsel","Tiny Tim","Toboggan","Together","Toy","Tradition","Train","Tranquility","Travel","Tree","Tree stand","Trimming","Trip","Trumpets","Trust","Tug","Turkey","Twinkling","Unboxing","Understanding","Unity","Universality","Unwrap","Vacation","Value","Values","Vanilla","Venison","Vixen","Visit","Volunteer","Walnuts","Warmness","Wassail","Wenceslaus","White","Winter","Winter solstice","Winter Wonderland","Wintertime","Wintry","Wise men","Wish","Wishes","Wonder","Wonderland","Workshop","Worship","Wrap","Wrapping paper","Wreath","Xmas","Yorkshire pudding","Youth","Yule","Yule Goat","Yule log","Yuletide","Zest"]