(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"0756":function(t,e,o){"use strict";var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("img",{staticClass:"img-fluid",attrs:{src:t.image}})])},s=[],n={props:{image:String}},i=n,a=o("2877"),w=Object(a["a"])(i,r,s,!1,null,null,null);e["a"]=w.exports},"1dde":function(t,e,o){var r=o("d039"),s=o("b622"),n=o("2d00"),i=s("species");t.exports=function(t){return n>=51||!r((function(){var e=[],o=e.constructor={};return o[i]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},2532:function(t,e,o){"use strict";var r=o("23e7"),s=o("5a34"),n=o("1d80"),i=o("ab13");r({target:"String",proto:!0,forced:!i("includes")},{includes:function(t){return!!~String(n(this)).indexOf(s(t),arguments.length>1?arguments[1]:void 0)}})},"44e7":function(t,e,o){var r=o("861d"),s=o("c6b6"),n=o("b622"),i=n("match");t.exports=function(t){var e;return r(t)&&(void 0!==(e=t[i])?!!e:"RegExp"==s(t))}},"5a34":function(t,e,o){var r=o("44e7");t.exports=function(t){if(r(t))throw TypeError("The method doesn't accept regular expressions");return t}},"65f0":function(t,e,o){var r=o("861d"),s=o("e8b5"),n=o("b622"),i=n("species");t.exports=function(t,e){var o;return s(t)&&(o=t.constructor,"function"!=typeof o||o!==Array&&!s(o.prototype)?r(o)&&(o=o[i],null===o&&(o=void 0)):o=void 0),new(void 0===o?Array:o)(0===e?0:e)}},8418:function(t,e,o){"use strict";var r=o("c04e"),s=o("9bf2"),n=o("5c6c");t.exports=function(t,e,o){var i=r(e);i in t?s.f(t,i,n(0,o)):t[i]=o}},a434:function(t,e,o){"use strict";var r=o("23e7"),s=o("23cb"),n=o("a691"),i=o("50c4"),a=o("7b0b"),w=o("65f0"),c=o("8418"),_=o("1dde"),d=o("ae40"),m=_("splice"),h=d("splice",{ACCESSORS:!0,0:0,1:2}),p=Math.max,g=Math.min,u=9007199254740991,l="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!m||!h},{splice:function(t,e){var o,r,_,d,m,h,f=a(this),b=i(f.length),y=s(t,b),v=arguments.length;if(0===v?o=r=0:1===v?(o=0,r=b-y):(o=v-2,r=g(p(n(e),0),b-y)),b+o-r>u)throw TypeError(l);for(_=w(f,r),d=0;d<r;d++)m=y+d,m in f&&c(_,d,f[m]);if(_.length=r,o<r){for(d=y;d<b-r;d++)m=d+r,h=d+o,m in f?f[h]=f[m]:delete f[h];for(d=b;d>b-r+o;d--)delete f[d-1]}else if(o>r)for(d=b-r;d>y;d--)m=d+r-1,h=d+o-1,m in f?f[h]=f[m]:delete f[h];for(d=0;d<o;d++)f[d+y]=arguments[d+2];return f.length=b-r+o,_}})},ab13:function(t,e,o){var r=o("b622"),s=r("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(o){try{return e[s]=!1,"/./"[t](e)}catch(r){}}return!1}},ae40:function(t,e,o){var r=o("83ab"),s=o("d039"),n=o("5135"),i=Object.defineProperty,a={},w=function(t){throw t};t.exports=function(t,e){if(n(a,t))return a[t];e||(e={});var o=[][t],c=!!n(e,"ACCESSORS")&&e.ACCESSORS,_=n(e,0)?e[0]:w,d=n(e,1)?e[1]:void 0;return a[t]=!!o&&!s((function(){if(c&&!r)return!0;var t={length:-1};c?i(t,1,{enumerable:!0,get:w}):t[1]=1,o.call(t,_,d)}))}},bcb8:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("Have a Cute Dog")]),o("b-button",{attrs:{variant:"primary"},on:{click:t.getdog}},[t._v(" See Some More Dogs ")]),o("br"),o("br"),o("br"),o("Dog",{attrs:{image:"https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"}})],1)},s=[],n=(o("a434"),o("0756")),i={name:"dogs",components:{Dog:n["a"]},data:function(){return{dogs:["https://thehappypuppysite.com/wp-content/uploads/2018/09/goldie1.jpg","https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","https://dogsnet.com/wp-content/uploads/2018/09/how-much-to-feed-a-golden-retriever-puppy-long.jpg","https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/05/14092252/generic_golden_retriever_puppy_sitting_in_grass.jpg","https://img-aws.ehowcdn.com/750x428p/photos.demandstudios.com/getty/article/83/128/460873489.jpg","https://www.natureplprints.com/p/729/golden-retriever-puppy-wooden-basket-purple-flowers-15336976.jpg.webp","https://img.pixers.pics/pho_wat(s3:700/FO/68/02/44/56/700_FO68024456_a75f13d7a64fc303309569e37c510964.jpg,700,530,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,480,jpg)/stickers-golden-retriever-puppy-running-towards-camera.jpg.jpg","https://66.media.tumblr.com/e143c2dfb04111ce8ed834cfa9fd9c2a/tumblr_n6p1hqdfer1r4bbqso1_500.gif","https://media1.tenor.com/images/1bc2b96509c8bf8a797f6ff8064387c8/tenor.gif?itemid=3481001","https://media2.giphy.com/media/YfQYj5pW7UbQc/source.gif","https://i.imgur.com/zH3iA75.gifv","https://www.youtube.com/watch?v=a6KGPBflhiM","https://www.youtube.com/watch?v=cS6J6BLDZoo","https://www.youtube.com/watch?v=Yv0acABELOA","https://www.youtube.com/watch?v=usvHg6miYKg","https://www.youtube.com/watch?v=HdZ_UfnzvRQ","https://www.reddit.com/r/aww/comments/ezbtls/i_know_you_are_helping_me/","https://www.reddit.com/r/aww/comments/ezfu5w/doggos_waiting_to_enter_the_hospital_rooms_of/","https://www.reddit.com/r/aww/comments/ez8zz4/we_are_just_gonna_put_that_back_right_here/","https://www.reddit.com/r/aww/comments/ezci8i/this_is_the_cutest_thing_i_have_seen_today/","https://www.reddit.com/r/aww/comments/ez9kw3/doggie_watermelons/","https://www.reddit.com/r/aww/comments/ez77th/this_is_how_my_dog_greets_me_everytime/","https://www.reddit.com/r/aww/comments/ezf75m/hes_all_grown_up/","https://www.reddit.com/r/aww/comments/ez62ec/dogs_reaction_to_walking_again_thanks_to/","https://www.reddit.com/r/aww/comments/ez9ilk/wholesome_to_handsome/","https://www.reddit.com/r/aww/comments/ezbzr4/bob_the_friendly_golden_retriever/","https://www.reddit.com/r/aww/comments/ez3ffp/handsome_good_boi/","https://www.reddit.com/r/aww/comments/eza17d/the_whole_family/","https://www.reddit.com/r/aww/comments/ez2vtz/belly_rubs/","https://www.reddit.com/r/aww/comments/ez9vi4/coming_home_to_these_two_everyday_has_turned_my/","https://www.reddit.com/r/aww/comments/ez1sio/my_favorite_uber_driver_by_far/","https://www.reddit.com/r/aww/comments/ezegog/this_man_reuniting_with_his_dog_after_3_years/","https://www.reddit.com/r/aww/comments/ez1jkw/look_at_my_majestic_boi/","https://www.reddit.com/r/aww/comments/ezhca6/where_does_the_time_go/","https://www.reddit.com/r/aww/comments/ahal9v/his_favorite_spot_when_traveling/","https://www.reddit.com/r/aww/comments/c22hu3/looking_at_my_cameras_during_a_business_trip_when/","https://www.reddit.com/r/aww/comments/b0fi8e/head_scritchesinstant_golden_smiles/","https://www.reddit.com/r/aww/comments/a9b7c0/my_sisters_blind_dog_loves_fetch/","https://www.reddit.com/r/aww/comments/cqzckc/this_is_maya_her_owner_built_her_a_luxury_cabin/","https://www.reddit.com/r/aww/comments/9yvn9w/this_is_how_they_sleep_every_night/","https://www.reddit.com/r/aww/comments/7n5yf5/senior_dog_meets_a_puppy_and_starts_to_feel_like/","https://www.reddit.com/r/aww/comments/d9cqt8/nobody_has_ever_had_as_much_fun_at_a_party_as/","https://www.reddit.com/r/aww/comments/9fcjig/one_dog_has_ear_medicine_she_needs_and_the_other/","https://www.reddit.com/r/aww/comments/ao5igy/service_doggo_walks_on_glass_floor_for_the_first/","https://www.reddit.com/r/aww/comments/7kfahs/shes_in_love_with_the_new_tiny_human/","https://www.reddit.com/r/aww/comments/en610b/her_reaction_to_seeing_my_face_after_our_nap/","https://www.reddit.com/r/aww/comments/el1g2a/is_this_what_people_mean_when_they_say_their_dog/","https://www.reddit.com/r/aww/comments/c1qt1x/doggos_polite_and_subtle_implication_that_he_is/","https://www.reddit.com/r/aww/comments/cuj3pn/its_nice_to_know_that_he_takes_care_of_me/","https://www.reddit.com/r/aww/comments/9wuppt/i_take_it_my_mailman_is_a_dog_lover/","https://www.reddit.com/r/aww/comments/9655aj/mittens_i_told_you_no_more_fighting/","https://www.reddit.com/r/aww/comments/e5zfhy/gorgeous_grey_wolf_becomes_a_good_boy_when/","https://www.reddit.com/r/aww/comments/6sf506/service_pitbull_training_to_protect_his_owners/","https://www.reddit.com/r/aww/comments/71eyzu/this_is_frida_she_has_saved_52_people_so_far_in/","https://www.reddit.com/r/aww/comments/7sweit/falling_asleep/","https://www.reddit.com/r/aww/comments/7bwtiu/i_havent_found_what_they_broke_yet/","https://www.reddit.com/r/aww/comments/c8v7cm/too_hot_to_play_fetch_outside_so_how_about_a_game/","https://www.reddit.com/r/dogsonroofs/comments/6a7wvw/the_patron_saint_of_this_subreddit_huckleberry/","https://www.reddit.com/r/dogsonroofs/comments/bo5c6x/im_not_crying_you_are/","https://www.reddit.com/r/dogsonroofs/comments/8oa25g/a_dog_getting_down_from_a_roof_with_a_ladder/","https://www.reddit.com/r/dogsonroofs/comments/bm3xs6/roof_boy/","https://www.reddit.com/r/dogsonroofs/comments/bmn0jw/he_got_on_top_of_a_grocery_storeliterally_have_no/","https://www.reddit.com/r/dogsonroofs/comments/elg3xa/two_for_one/","https://www.reddit.com/r/dogsonroofs/comments/bsxjax/dog_on_roof/","https://www.reddit.com/r/dogsonroofs/comments/blxhoo/he_shouldnt_be_here/","https://www.reddit.com/r/dogsonroofs/comments/ef2jjg/rescued_from_the_roof/","https://www.reddit.com/r/dogsonroofs/comments/blkpza/nothin_better_than_chillin_on_the_roof_with_my/","https://www.reddit.com/r/dogsonroofs/comments/bnuuz2/surveying_his_new_domain/","https://www.reddit.com/r/dogsonroofs/comments/ekyrur/from_my_coworker_this_is_my_moms_dog_no_idea_how/","https://www.youtube.com/watch?v=Gw_xvtWJ6q0"],i:-1,doglen:0}},mounted:function(){this.doglen=this.dogs.length,localStorage.getItem("doglen")&&this.doglen<=localStorage.getItem("doglen")&&localStorage.getItem("dogs")&&(confirm("Continue your last session?")?this.dogs=JSON.parse(localStorage.getItem("dogs")):localStorage.removeItem("dogs")),localStorage.setItem("doglen",JSON.stringify(this.doglen))},methods:{getdog:function(){this.dogs.length>0?(this.i=this.getRandomInt(this.dogs.length),window.open(this.dogs[this.i]),this.dogs.splice(this.i,1),localStorage.setItem("dogs",JSON.stringify(this.dogs))):this.$router.push({name:"nodogs"})},getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))}}},a=i,w=o("2877"),c=Object(w["a"])(a,r,s,!1,null,null,null);e["default"]=c.exports},caad:function(t,e,o){"use strict";var r=o("23e7"),s=o("4d64").includes,n=o("44d2"),i=o("ae40"),a=i("indexOf",{ACCESSORS:!0,1:0});r({target:"Array",proto:!0,forced:!a},{includes:function(t){return s(this,t,arguments.length>1?arguments[1]:void 0)}}),n("includes")},e8b5:function(t,e,o){var r=o("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f9ba:function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("h1",[t._v("I'm sorry I'm out of dogs :(")]),o("router-link",{attrs:{to:"dogs"}},[o("b-button",{attrs:{variant:"primary"}},[t._v(" Look at the cute dogs again ")])],1),o("br"),o("br"),o("br"),o("Dog",{attrs:{image:"https://i.redd.it/ut5kd653bn711.jpg"}})],1)},s=[],n=(o("caad"),o("2532"),o("0756")),i={name:"nodogs",components:{Dog:n["a"]},data:function(){return{dogs:["https://thehappypuppysite.com/wp-content/uploads/2018/09/goldie1.jpg","https://images.unsplash.com/photo-1546238232-20216dec9f72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80","https://dogsnet.com/wp-content/uploads/2018/09/how-much-to-feed-a-golden-retriever-puppy-long.jpg","https://s3.amazonaws.com/cdn-origin-etr.akc.org/wp-content/uploads/2017/05/14092252/generic_golden_retriever_puppy_sitting_in_grass.jpg","https://img-aws.ehowcdn.com/750x428p/photos.demandstudios.com/getty/article/83/128/460873489.jpg","https://www.natureplprints.com/p/729/golden-retriever-puppy-wooden-basket-purple-flowers-15336976.jpg.webp","https://img.pixers.pics/pho_wat(s3:700/FO/68/02/44/56/700_FO68024456_a75f13d7a64fc303309569e37c510964.jpg,700,530,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,480,jpg)/stickers-golden-retriever-puppy-running-towards-camera.jpg.jpg","https://66.media.tumblr.com/e143c2dfb04111ce8ed834cfa9fd9c2a/tumblr_n6p1hqdfer1r4bbqso1_500.gif","https://media1.tenor.com/images/1bc2b96509c8bf8a797f6ff8064387c8/tenor.gif?itemid=3481001","https://media2.giphy.com/media/YfQYj5pW7UbQc/source.gif","https://i.imgur.com/zH3iA75.gifv"],seenDogs:[],i:-1}},methods:{getdog:function(){if(this.seenDogs.length==this.dogs.length){this.i=this.getRandomInt(this.dogs.length);while(this.seenDogs.includes(this.i))this.i=this.getRandomInt(this.dogs.length);this.seenDogs.push(this.i),window.open(this.dogs[this.i])}else this.$router.push({name:"tools"})},getRandomInt:function(t){return Math.floor(Math.random()*Math.floor(t))}}},a=i,w=o("2877"),c=Object(w["a"])(a,r,s,!1,null,null,null);e["default"]=c.exports}}]);
//# sourceMappingURL=about.bc4a9919.js.map