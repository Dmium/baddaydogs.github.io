(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0756":function(t,e,o){"use strict";var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("img",{staticClass:"img-fluid",attrs:{src:t.image}})])},r=[],n={props:{image:String}},i=n,a=o("2877"),m=Object(a["a"])(i,s,r,!1,null,null,null);e["a"]=m.exports},"1dde":function(t,e,o){var s=o("d039"),r=o("b622"),n=o("2d00"),i=r("species");t.exports=function(t){return n>=51||!s((function(){var e=[],o=e.constructor={};return o[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,o){"use strict";var s=o("23e7"),r=o("5a34"),n=o("1d80"),i=o("ab13");s({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(n(this)).indexOf(r(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,o){var s=o("861d"),r=o("c6b6"),n=o("b622"),i=n("match");t.exports=function(t){var e;return s(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==r(t))}},"5a34":function(t,e,o){var s=o("44e7");t.exports=function(t){if(s(t))throw TypeError("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,o){var s=o("861d"),r=o("e8b5"),n=o("b622"),i=n("species");t.exports=function(t,e){var o;return r(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!r(o.prototype)?s(o)&&(o=o[i],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===e?0:e)}},8418:function(t,e,o){"use strict";var s=o("c04e"),r=o("9bf2"),n=o("5c6c");t.exports=function(t,e,o){var i=s(e);i in t?r.f(t,i,n(0,o)):t[i]=o}},a434:function(t,e,o){"use strict";var s=o("23e7"),r=o("23cb"),n=o("a691"),i=o("50c4"),a=o("7b0b"),m=o("65f0"),c=o("8418"),_=o("1dde"),w=o("ae40"),d=_("splice"),h=w("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,u=9007199254740991,l="Maximum allowed length exceeded";s({target:"Array",proto:!0,forced:!d||!h},{splice:function(t,e){var o,s,_,w,d,h,f=a(this),b=i(f.length),y=r(t,b),v=arguments.length;if(0===v?o=s=0:1===v?(o=0,s=b-y):(o=v-2,s=g(p(n(e),0),b-y)),b+o-s>u)throw TypeError(l);for(_=m(f,s),w=0;w<s;w++)d=y+w,d in f&&c(_,w,f[d]);if(_.length=s,o<s){for(w=y;w<b-s;w++)d=w+s,h=w+o,d in f?f[h]=f[d]:delete f[h];for(w=b;w>b-s+o;w--)delete f[w-1]}else if(o>s)for(w=b-s;w>y;w--)d=w+s-1,h=w+o-1,d in f?f[h]=f[d]:delete f[h];for(w=0;w<o;w++)f[w+y]=arguments[w+2];return f.length=b-s+o,_}})},ab13:function(t,e,o){var s=o("b622"),r=s("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(o){try{return e[r]=!1,"/./"[t](e)}catch(s){}}return!1}},ae40:function(t,e,o){var s=o("83ab"),r=o("d039"),n=o("5135"),i=Object.defineProperty,a={},m=function(t){throw t};t.exports=function(t,e){if(n(a,t))return a[t];e||(e={});var o=[][t],c=!!n(e,"ACCESSORS")&&e.ACCESSORS,_=n(e,0)?e[0]:m,w=n(e,1)?e[1]:void 0;return a[t]=!!o&&!r((function(){if(c&&!s)return!0;var t={length:-1};c?i(t,1,{enumerable:!0,get:m}):t[1]=1,o.call(t,_,w)}))}},bcb8:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Have a Cute Dog")]),o("b-button",{attrs:{variant:"primary",href:t.clink,target:"_blank"},on:{click:t.getdog}},[t._v(" See Some More Dogs ")]),o("br"),o("br"),o("br"),o("Dog",{attrs:{image:"https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}})],1)},r=[],n=(o("a434"),o("0756")),i={name:"dogs",components:{Dog:n["a"]},data:function(){return{dogs:["https://thehappypuppysite.com/wp-content/uploads/2018/09/goldie1.jpg","https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","https://dogsnet.com/wp-content/uploads/2018/09/how-much-to-feed-a-golden-retriever-puppy-long.jpg","https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/05/14092252/generic_golden_retriever_puppy_sitting_in_grass.jpg","https://img-aws.ehowcdn.com/750x428p/photos.demandstudios.com/getty/article/83/128/460873489.jpg","https://www.natureplprints.com/p/729/golden-retriever-puppy-wooden-basket-purple-flowers-15336976.jpg.webp","https://img.pixers.pics/pho_wat(s3:700/FO/68/02/44/56/700_FO68024456_a75f13d7a64fc303309569e37c510964.jpg,700,530,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,480,jpg)/stickers-golden-retriever-puppy-running-towards-camera.jpg.jpg","https://66.media.tumblr.com/e143c2dfb04111ce8ed834cfa9fd9c2a/tumblr_n6p1hqdfer1r4bbqso1_500.gif","https://media1.tenor.com/images/1bc2b96509c8bf8a797f6ff8064387c8/tenor.gif?itemid=3481001","https://media2.giphy.com/media/YfQYj5pW7UbQc/source.gif","https://i.imgur.com/zH3iA75.gifv","https://www.youtube.com/watch?v=a6KGPBflhiM","https://www.youtube.com/watch?v=cS6J6BLDZoo","https://www.youtube.com/watch?v=Yv0acABELOA","https://www.youtube.com/watch?v=usvHg6miYKg","https://www.youtube.com/watch?v=HdZ_UfnzvRQ","https://www.reddit.com/r/aww/comments/ezbtls/i_know_you_are_helping_me/","https://www.reddit.com/r/aww/comments/ezfu5w/doggos_waiting_to_enter_the_hospital_rooms_of/","https://www.reddit.com/r/aww/comments/ez8zz4/we_are_just_gonna_put_that_back_right_here/","https://www.reddit.com/r/aww/comments/ezci8i/this_is_the_cutest_thing_i_have_seen_today/","https://www.reddit.com/r/aww/comments/ez9kw3/doggie_watermelons/","https://www.reddit.com/r/aww/comments/ez77th/this_is_how_my_dog_greets_me_everytime/","https://www.reddit.com/r/aww/comments/ezf75m/hes_all_grown_up/","https://www.reddit.com/r/aww/comments/ez62ec/dogs_reaction_to_walking_again_thanks_to/","https://www.reddit.com/r/aww/comments/ez9ilk/wholesome_to_handsome/","https://www.reddit.com/r/aww/comments/ezbzr4/bob_the_friendly_golden_retriever/","https://www.reddit.com/r/aww/comments/ez3ffp/handsome_good_boi/","https://www.reddit.com/r/aww/comments/eza17d/the_whole_family/","https://www.reddit.com/r/aww/comments/ez2vtz/belly_rubs/","https://www.reddit.com/r/aww/comments/ez9vi4/coming_home_to_these_two_everyday_has_turned_my/","https://www.reddit.com/r/aww/comments/ez1sio/my_favorite_uber_driver_by_far/","https://www.reddit.com/r/aww/comments/ezegog/this_man_reuniting_with_his_dog_after_3_years/","https://www.reddit.com/r/aww/comments/ez1jkw/look_at_my_majestic_boi/","https://www.reddit.com/r/aww/comments/ezhca6/where_does_the_time_go/","https://www.reddit.com/r/aww/comments/ahal9v/his_favorite_spot_when_traveling/","https://www.reddit.com/r/aww/comments/c22hu3/looking_at_my_cameras_during_a_business_trip_when/","https://www.reddit.com/r/aww/comments/b0fi8e/head_scritchesinstant_golden_smiles/","https://www.reddit.com/r/aww/comments/a9b7c0/my_sisters_blind_dog_loves_fetch/","https://www.reddit.com/r/aww/comments/cqzckc/this_is_maya_her_owner_built_her_a_luxury_cabin/","https://www.reddit.com/r/aww/comments/9yvn9w/this_is_how_they_sleep_every_night/","https://www.reddit.com/r/aww/comments/7n5yf5/senior_dog_meets_a_puppy_and_starts_to_feel_like/","https://www.reddit.com/r/aww/comments/d9cqt8/nobody_has_ever_had_as_much_fun_at_a_party_as/","https://www.reddit.com/r/aww/comments/9fcjig/one_dog_has_ear_medicine_she_needs_and_the_other/","https://www.reddit.com/r/aww/comments/ao5igy/service_doggo_walks_on_glass_floor_for_the_first/","https://www.reddit.com/r/aww/comments/7kfahs/shes_in_love_with_the_new_tiny_human/","https://www.reddit.com/r/aww/comments/en610b/her_reaction_to_seeing_my_face_after_our_nap/","https://www.reddit.com/r/aww/comments/el1g2a/is_this_what_people_mean_when_they_say_their_dog/","https://www.reddit.com/r/aww/comments/c1qt1x/doggos_polite_and_subtle_implication_that_he_is/","https://www.reddit.com/r/aww/comments/cuj3pn/its_nice_to_know_that_he_takes_care_of_me/","https://www.reddit.com/r/aww/comments/9wuppt/i_take_it_my_mailman_is_a_dog_lover/","https://www.reddit.com/r/aww/comments/9655aj/mittens_i_told_you_no_more_fighting/","https://www.reddit.com/r/aww/comments/e5zfhy/gorgeous_grey_wolf_becomes_a_good_boy_when/","https://www.reddit.com/r/aww/comments/6sf506/service_pitbull_training_to_protect_his_owners/","https://www.reddit.com/r/aww/comments/71eyzu/this_is_frida_she_has_saved_52_people_so_far_in/","https://www.reddit.com/r/aww/comments/7sweit/falling_asleep/","https://www.reddit.com/r/aww/comments/7bwtiu/i_havent_found_what_they_broke_yet/","https://www.reddit.com/r/aww/comments/c8v7cm/too_hot_to_play_fetch_outside_so_how_about_a_game/","https://www.reddit.com/r/dogsonroofs/comments/6a7wvw/the_patron_saint_of_this_subreddit_huckleberry/","https://www.reddit.com/r/dogsonroofs/comments/bo5c6x/im_not_crying_you_are/","https://www.reddit.com/r/dogsonroofs/comments/8oa25g/a_dog_getting_down_from_a_roof_with_a_ladder/","https://www.reddit.com/r/dogsonroofs/comments/bm3xs6/roof_boy/","https://www.reddit.com/r/dogsonroofs/comments/bmn0jw/he_got_on_top_of_a_grocery_storeliterally_have_no/","https://www.reddit.com/r/dogsonroofs/comments/elg3xa/two_for_one/","https://www.reddit.com/r/dogsonroofs/comments/bsxjax/dog_on_roof/","https://www.reddit.com/r/dogsonroofs/comments/blxhoo/he_shouldnt_be_here/","https://www.reddit.com/r/dogsonroofs/comments/ef2jjg/rescued_from_the_roof/","https://www.reddit.com/r/dogsonroofs/comments/blkpza/nothin_better_than_chillin_on_the_roof_with_my/","https://www.reddit.com/r/dogsonroofs/comments/bnuuz2/surveying_his_new_domain/","https://www.reddit.com/r/dogsonroofs/comments/ekyrur/from_my_coworker_this_is_my_moms_dog_no_idea_how/","https://www.youtube.com/watch?v=Gw_xvtWJ6q0","https://www.reddit.com/r/gifsthatkeepongiving/comments/ezjydm/beyond_beleaf/","https://www.reddit.com/r/gifs/comments/eziqjw/dog_takes_a_look_to_camera_after_awesome_catch/","https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-dog-video-lead-1590597482.jpg?resize=768:*","https://media2.s-nbcnews.com/j/newscms/2018_20/1339477/puppy-cute-today-180515-main_a936531048fdb698635dd1b418abdee9.fit-2000w.jpg","https://images2.minutemediacdn.com/image/upload/c_fill,g_auto,h_1248,w_2220/f_auto,q_auto,w_1100/v1555279313/shape/mentalfloss/istock-598825938.png","https://i2-prod.examinerlive.co.uk/incoming/article14591140.ece/ALTERNATES/s810/Cute-puppies-relaxing-in-hammocks.jpg","https://images.pexels.com/photos/3726314/pexels-photo-3726314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260","https://gfycat.com/chubbythankfuljohndory-cute-moment-of-the-horses-cutest-animals","https://mytebox.com/gif/Hi-Five-from-Cute-Puppy-GIF.gif","https://giphy.com/gifs/originals-dog-puppy-motivational-iMJTvpDSyKDXNU9SBn/fullscreen","https://i.pinimg.com/564x/68/7b/36/687b36b309197b70b2c78be1834b8bdd.jpg","https://i.pinimg.com/564x/c0/32/48/c0324886265f810ae3c8ff9296a7fe76.jpg","https://www.reddit.com/r/Moonmoon/comments/f34ytr/moonmoon_cant_seem_to_figure_out_the_memory_foam/","https://www.reddit.com/r/Moonmoon/comments/d6bez3/voice_of_an_angel/","https://www.reddit.com/r/Moonmoon/comments/g4kybv/nothin_like_a_belly_rub/","https://www.reddit.com/r/Moonmoon/comments/8kog37/doin_a_snooze/","https://www.reddit.com/r/Moonmoon/comments/f7y7a0/moonmoon_jr_does_a_sit/","https://www.reddit.com/r/Moonmoon/comments/i7tnrh/exhausted_moonmoon_cooling_off/","https://www.reddit.com/r/Moonmoon/comments/d5h7rk/coming_in_hot_my_husky_jumping_into_heel/","https://www.reddit.com/r/Moonmoon/comments/8ku5ck/moon_moon_is_just_trying_to_fit_in/","https://www.reddit.com/r/Moonmoon/comments/eo84bv/it_pisses_him_off_when_my_wife_does_that/"],i:-1,doglen:0,clink:""}},mounted:function(){this.doglen=this.dogs.length,localStorage.getItem("doglen")&&this.doglen<=localStorage.getItem("doglen")&&localStorage.getItem("dogs")&&(confirm("Continue your last session?")?this.dogs=JSON.parse(localStorage.getItem("dogs")):localStorage.removeItem("dogs")),localStorage.setItem("doglen",JSON.stringify(this.doglen)),this.getdog()},methods:{getdog:function(){this.dogs.length>0?(this.i=this.getRandomInt(this.dogs.length),this.clink=this.dogs[this.i],this.dogs.splice(this.i,1),localStorage.setItem("dogs",JSON.stringify(this.dogs))):this.$router.push({name:"nodogs"})},getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))}}},a=i,m=o("2877"),c=Object(m["a"])(a,s,r,!1,null,null,null);e["default"]=c.exports},caad:function(t,e,o){"use strict";var s=o("23e7"),r=o("4d64").includes,n=o("44d2"),i=o("ae40"),a=i("indexOf",{ACCESSORS:!0,1:0});s({target:"Array",proto:!0,forced:!a},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},e8b5:function(t,e,o){var s=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==s(t)}},f9ba:function(t,e,o){"use strict";o.r(e);var s=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("I'm sorry I'm out of dogs :(")]),o("router-link",{attrs:{to:"dogs"}},[o("b-button",{attrs:{variant:"primary"}},[t._v(" Look at the cute dogs again ")])],1),o("br"),o("br"),o("br"),o("Dog",{attrs:{image:"https://i.redd.it/ut5kd653bn711.jpg"}})],1)},r=[],n=(o("caad"),o("2532"),o("0756")),i={name:"nodogs",components:{Dog:n["a"]},data:function(){return{dogs:["https://thehappypuppysite.com/wp-content/uploads/2018/09/goldie1.jpg","https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","https://dogsnet.com/wp-content/uploads/2018/09/how-much-to-feed-a-golden-retriever-puppy-long.jpg","https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/05/14092252/generic_golden_retriever_puppy_sitting_in_grass.jpg","https://img-aws.ehowcdn.com/750x428p/photos.demandstudios.com/getty/article/83/128/460873489.jpg","https://www.natureplprints.com/p/729/golden-retriever-puppy-wooden-basket-purple-flowers-15336976.jpg.webp","https://img.pixers.pics/pho_wat(s3:700/FO/68/02/44/56/700_FO68024456_a75f13d7a64fc303309569e37c510964.jpg,700,530,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,480,jpg)/stickers-golden-retriever-puppy-running-towards-camera.jpg.jpg","https://66.media.tumblr.com/e143c2dfb04111ce8ed834cfa9fd9c2a/tumblr_n6p1hqdfer1r4bbqso1_500.gif","https://media1.tenor.com/images/1bc2b96509c8bf8a797f6ff8064387c8/tenor.gif?itemid=3481001","https://media2.giphy.com/media/YfQYj5pW7UbQc/source.gif","https://i.imgur.com/zH3iA75.gifv"],seenDogs:[],i:-1}},methods:{getdog:function(){if(this.seenDogs.length==this.dogs.length){this.i=this.getRandomInt(this.dogs.length);while(this.seenDogs.includes(this.i))this.i=this.getRandomInt(this.dogs.length);this.seenDogs.push(this.i),window.open(this.dogs[this.i])}else this.$router.push({name:"tools"})},getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))}}},a=i,m=o("2877"),c=Object(m["a"])(a,s,r,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=about.f957e512.js.map