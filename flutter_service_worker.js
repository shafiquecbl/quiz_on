'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9e8d5699708d128d82b812d75c4c0878",
".git/config": "d993283a57d2b7f6296c31b58a9472e0",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "0e25e3ab31495f15cbdd1f55697a3e09",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "75fd0c5ffc7e30f4c1d1d1b0d3eafb7c",
".git/logs/refs/heads/main": "038794dcca1ce64a685cec5489e9a145",
".git/logs/refs/remotes/origin/main": "9f38a1b533d50b2a0cdf68ceee1b9340",
".git/objects/02/21a1b19e1f81ba717d48e2aca881be572a0e9a": "2cc1b21a0ed409ff306c932c71814553",
".git/objects/05/a18fb2c1f669120c4a725b7f8465a7ff43a418": "32273212f9ab93c91058f77379865cbd",
".git/objects/07/5b01a6bd16b2d3afe04afba490ece4ae481b29": "cfa0b6fdbb42b1bae758ec03f17c213e",
".git/objects/07/7ef4afec72b50e1750f0198e86cd51bb099797": "afc8c17b9d187c363ddd9f8c4f3e2d5c",
".git/objects/0b/44467c11eb4b2b41423a033a47e4a2498be2c3": "0df041b57ba9b994ee8eb278d558dbcb",
".git/objects/0c/749935d52c4dc8abce7fa72eb6e69420c1f97a": "8939723c01e7af6e89ce4bd168b15f54",
".git/objects/0c/8fc155cd7a356e936dc6e1aab28ef33d1b84b2": "e9853292c0dcb47f12e3ce58658ead06",
".git/objects/15/05b014299cfa655e2860d51d98b18b98a9b150": "b230a04369b1113aa27874a8149a7dfe",
".git/objects/16/f850dfc1354c477b13ee10ce4db6f6cbeb17a7": "ecdb773dc9afb246dd9d39c79c38a2fa",
".git/objects/19/68d29ba5a73d30f33eee4a007eb86e07688ee9": "8e7b3993dab1ef19a5b04240ab0ac8e5",
".git/objects/1f/db48531ef310eac6bb63de9644b9663222666e": "57ee656e086a98d049ab3fe42497f44e",
".git/objects/20/e965dad4fa7bf1160e1d8c42b7240b65627d58": "ad9f5c3a175696c6b675c530ad6819bf",
".git/objects/22/30af3068f89cf822fc27444e40fc338910435d": "893d49f3497bf096c7b4f29585e15546",
".git/objects/2a/46f13a3ae9801986b4d8b6d3bf7d0eb32b9e14": "7e586a39200e888507ad7c8e17c9b177",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/2d/86935d93aebc4ffc098eb48a54e2e66cd88b49": "3740056041049d8a029044a967f06133",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/34/b707b75024c307abe31501bd33d8bcfd1d3237": "baaef2ee2d9c6d66789d287401dee49d",
".git/objects/38/5ff18f56a062102e1bd515912c86230b8a90ba": "feac33c694109d55a22686d5a42bfa43",
".git/objects/39/2edb2860ebc9c561fb40c37a963f2aed089edb": "e32000e2524ebf1b152fb24cf44b2014",
".git/objects/3c/4a0755728bd55f4b1a371dc4f13004cb7e7413": "9e0252d5c13f29097c30eb5c30e45bb3",
".git/objects/40/5918b10a118fa54d834d4c3fadea3a6bcf9c1c": "bc38be73e50892810165cb3257e9c654",
".git/objects/40/b4d3cd89ea6a3a63fb8fc09fb418407f710773": "5c62011eefc035d247a3bae149eb6e62",
".git/objects/40/c6078d86fe9af0b0ccf366c740e57f7269a0cf": "501d6717fd918dce13e04ccfda1fad1e",
".git/objects/45/3dafecc07a3af649c676c9abef2b465186bd94": "e62d7c3eb120333add5e1c828f2b88c4",
".git/objects/47/e0b391c60fb48451801e6fe4d06c678baf1d53": "7236b11ef47bfacf02ee9a2acc68de72",
".git/objects/48/5d081ba2a779e0ce205f6b6d0fd4a9f7efc02d": "47ce8b14da7959a1d3354cff160ca11a",
".git/objects/48/b8e6dc4a5b42b03a47237031111d059d901757": "f5c8627a0b7df3dda1fb97672204a8b3",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4d/cf7e73d8b740be4f871c3ad66c13464565af44": "4c3dd70214b92ff20b2b4f68829b2ad8",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/4f/5d314795078ee38e108ffee608efb362dc92dd": "5d094ccd99de58de571a57045e8b4695",
".git/objects/50/14935f32ed296a250d4a8de53f75c39d12c5b6": "985fc4a9ed45fe099fc0aef161e66c25",
".git/objects/51/b62d76ea970fc07beabe29bf8b12a7f2c290d5": "20ad10a6bdf3e407caef81d68c17788b",
".git/objects/54/5f071368d87cb667b24be602f3960d78edfcd9": "577aad63979e3354fe07d94dc1707a2d",
".git/objects/5b/dc2bace514e5e7e3bf097808cad9fcff54a10e": "b8ccf964341ed2b8a9e10729d82ce1cd",
".git/objects/5d/72bfe879522b11ccb4d4b7777b580a46a27bb6": "194a45b7879c2f9e90a9353deef93e51",
".git/objects/60/706b2c4e777991b2737ea2909bc2be2a367769": "8056d27fd68c5ed07db5c9a5c159f77a",
".git/objects/61/a0a816fcae55c95be40e3e554341c183b4c724": "fd04a7250f368f48abf022c8be36ecbc",
".git/objects/63/44b547b5851aeae9b4bfd4c511d787b33d3e2f": "cedafbdaa7b79fea5ba685406c5b3dd6",
".git/objects/65/a1336a1c7efa00b78ec324497ab9c05444100a": "c0ad8cfbefd5250c370215ca5c39866f",
".git/objects/68/ed41166697e37c24fcf332e73777c8414e8a4f": "37266b9b9dee0ae7017c5ab6b30dee20",
".git/objects/69/2626af2eada9be2b2684dec1a992e212244757": "619b94a5b86c2c688f75a9ab63738cd5",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/70/d8def89473f424a32d86d75ba2899f7d8a0f4b": "21b1857050560f0ea0138726e12215c2",
".git/objects/71/040409c50fe95d8a29c0b53cb5747d62949a75": "a7757bacc117e47365fa2d3447885209",
".git/objects/71/6e387df2cfd7e5f80360439638d6eaadbdd53d": "cd4a9d89b3f8f9a54885ad35d53cd8fd",
".git/objects/74/08722f4ffc1acc7028715352dc174acdc43623": "d6e1cecb11ba5f39b63665a3d3aaa48f",
".git/objects/74/b7876b741dad7427ab380bfd06a45148566736": "cddcf41f4d87636e0950859d6f2ff8b6",
".git/objects/75/3387dae201ffcc16a4b343ee4bfbdf4d78d3b4": "9f151385e0226fbebcd38d8da234600c",
".git/objects/77/767b46495f48a4cc19a5a115cd01bf9a7055e1": "4ddc64ebc4aa8f6302ab777d98dfad9d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/8ea3a7a7725643ee657fa78b00517eff626b30": "0593f9f815cb5a4efa92011970720b59",
".git/objects/7b/cc154fe8a3d23cafda50a6793b67f1327cc1a9": "a891d98853f231072ce47d5a6baccdef",
".git/objects/7f/cceeb0e1a6d89c50ef90fc2501901928357c53": "8c4d52ca8e4a012c2c25f1dbb45af9d0",
".git/objects/83/dde821e320d71f5852b9d656f493d20fe4cb9d": "9d7621bb19e588299fe23c5966585c4b",
".git/objects/84/f93734f58c8d1fcef57ecb20d8785f7e48d19d": "7faf6674f4ded4c30799d3a168d8d2aa",
".git/objects/85/25aae68cf452ab7ae0b6ce098086762bdfe4ed": "fd8d3e1d68150dc86f02ecbe29e5d736",
".git/objects/88/45176f31a4ec8de854e35416f45d29b70dcd5a": "db6dff46a69a1d91adc893f5cc8a4623",
".git/objects/89/431ce8231aad65f0eb2b4727188ce32d2da136": "bb629fc3aeda1e992fe9262d2385f6f5",
".git/objects/8c/710fa0a297a4df0f272bebf02eadea66a03474": "c2142ebbe4ac0439963007607f58c05d",
".git/objects/8d/7c725317cba6bb7fa263cea1fc9034085ef351": "5d433cf75ed139da62ab326df35cbe06",
".git/objects/8e/ba995741a59d5ac810a576be4a9477f8d13630": "105ec3f3fa9d497b52bc7c186b3de200",
".git/objects/90/8a54c4f5e9cbfa05ac472584cef28dec95373c": "b20eebddb696f837e303699c8105fa29",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/92/e3252c89567235b547141aa53d502dff6d4eac": "853f805a93fc90a230709da2d4f1e86f",
".git/objects/95/ce6bea151b3e171da4e82126440f47d612e957": "5968bbe366521b361789ccd03b724572",
".git/objects/96/3fb2032016ca8ab9df5e055029e80b1c8009e4": "d3e50a852e7573d1b0ade3eaba39a486",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/9b/e3452403cb87cf50f5e450fff2853c561e374f": "e6507123f9792d32fd108e745345da4b",
".git/objects/9b/eb26456fc7e1dfd7b755433fa8ccc712f34791": "a45cba9a79b5b6a25da3e22588f5ca99",
".git/objects/9c/7e58a7e94f90d41b68ee871a0371a7b048ec32": "6d93f76384ffddbdaf87f5c7a11dde75",
".git/objects/9f/7a5f8550f0ba5f87d5795f4ea321decbbacf26": "9558adc3e32229f4d2a80f193091abcf",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/f5e5e4342f6d60ea70b82a84d22ad9d9ca5990": "d65fd0b5c1f94da72e48fae78647c2ee",
".git/objects/a2/f45aa61196670e810e416eb5d70c7347eb159f": "c37dcfb028f19e4dc4204d0372d85153",
".git/objects/a4/42dcb9e424c26660f49d56b9dcf68a1493e2c6": "00472cf777c59acb09e7b6914ab7bdba",
".git/objects/a4/c74582476d9681f6aa7a9d0867e6dcf70d9c82": "af35992a34672e141b1e7a3e566963d8",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/2af9a4876b7162a363f7342c22d14ff308dcfd": "3f7fcd608a9419bfdd5950f879bba7b2",
".git/objects/ad/2bccfbba0a452c4fddb7dd53d5884fefa35c33": "11bfbb6147a886b6059a669eb51468b8",
".git/objects/ae/9eec2e488d07ddfdf6a9ce6b89d16ab22e893c": "76ae71253038b8d9cea78e24d2637a35",
".git/objects/af/b1a90958cf0144020ae8432f5b717dfca6475c": "f2ed44c57d4de090c5dc6e40a96c5240",
".git/objects/b1/b1b6e5a739f27de30f7a906cf9a5a1fd164c8f": "598237a6f25f8bfdf436d6e8cbbe569a",
".git/objects/b2/0cbe3c6401ef902dc6a10fa4a74c35fb576678": "7584582012034be59e7118eb7725b1e7",
".git/objects/b5/20bedaae628ee8ed31bfd08565ae7f1663c01d": "466f14596f8fe5508e30ed87db806f73",
".git/objects/b7/2e0b51d3dc576ceb9fb84bdea5e5d45457c1de": "871ea9ad5286f2842cd1f8a297350f0c",
".git/objects/be/b5600ad0e2f526cecb7f92621b2de798156eb8": "e9c8d24eb55344fad018f4b8e6bb7901",
".git/objects/c3/37239aff22f75cb9ad52925ffa91d3fd6f2216": "eb483162dc75d77ab126f1c52ec3c572",
".git/objects/c3/787b4f0034590813ac77bf0dba7115a9604b62": "6e7e9711cff18d46d16c5de836ac9ef1",
".git/objects/c9/f0b02b6c115cf290458933ceb8bfe569dbadb2": "c6c737e6871b56c913f6df36f1b1f786",
".git/objects/ce/9e329c22357be9123b0ddaefb46393c7fa97ba": "edafa1beca2b5840043fb76ae630f309",
".git/objects/d6/80cdcd1625d4a6bf9179214086168cdd8f8a3e": "b13cf3f0cf4c79afb9c930f81bc2f0a8",
".git/objects/d7/6b0ca9a2f2d5208f10d4921fc92f7e973bc9c6": "1ef1c6ebe307aa113e7b5d547e7bb0c6",
".git/objects/e5/217fa51b0aa0811122a1813b116e37eed86ff6": "b24bd17ad46396f68e6f418d8c27dc79",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/086c6da0c1af3fab3fe9d17c2e03ccf78af09d": "b5c457506b727d8e1c348cdd88f8dbcf",
".git/objects/e7/69df9f408753b7380a88d374c1240c3bd7ecab": "9d595700c46ba77f8ec286395726311e",
".git/objects/e8/dd73acbdd74dab100bcad0b5bf92231a426068": "70468ca63e1647e18dce5b0dfa2251df",
".git/objects/ec/39228f24d9217a97d799276c856167ea62e908": "9cf4ad7c4ce84693336b15812299bdb7",
".git/objects/f1/58339c49f252144b0e665ab8aed9b52b99dca3": "fba69544fe09d78646ccfa6606e51ef6",
".git/objects/f2/1707f03141ac7555860f47ca0aad2a43268d56": "d025398fa40ded7be08ae262b40a3ba2",
".git/objects/f4/606ea5e6c9284bf3b009846618869518dd609d": "91b3224b84901c76db0e3f18ba0a4a33",
".git/objects/f4/695b09018e097af1077748a550b9e2b153a1b6": "570e12756c67da708b4297c696aa4f87",
".git/objects/fd/3b41a071c7b1bdf7788f4e9d61768085fb0aa6": "64087c3e8e2a8f1e33762f735d21c8e6",
".git/refs/heads/main": "20ba8112d0ba1375f45af29577bd2196",
".git/refs/remotes/origin/main": "20ba8112d0ba1375f45af29577bd2196",
"assets/AssetManifest.json": "b0b047dd7ab89e1ec73ae70192a03b33",
"assets/assets/alert.png": "5aa78b73ecb35e0a3dcbd090163308dd",
"assets/assets/done.png": "52171a5a0675268e129a81ff01246df6",
"assets/assets/fonts/Texta-Black.ttf": "a5491a9fe37e05cddb38669eee47acc7",
"assets/assets/fonts/Texta-BlackIt.ttf": "809ac5514e3bf1ab28da7e897e5b6a6d",
"assets/assets/fonts/Texta-Bold.ttf": "3223f9d3f5f50605e83d39c17393dc91",
"assets/assets/fonts/Texta-BoldIt.ttf": "8b753a7456d30b890c1758933dd64416",
"assets/assets/fonts/Texta-BookIt.ttf": "7352de653796fe5484b12c893bdd54b3",
"assets/assets/fonts/Texta-Heavy.ttf": "85727d96312bd94692072483498d646c",
"assets/assets/fonts/Texta-HeavyIt.ttf": "18af99ac995233aaba6a5f55122fb7d2",
"assets/assets/fonts/Texta-It.ttf": "73a6daf0491eb1a3f0436dcaef220db8",
"assets/assets/fonts/Texta-Light.ttf": "4a5dd6a7d927337747e8c1a76db7693d",
"assets/assets/fonts/Texta-LightIt.ttf": "628471b2189143c24190c564f916b41d",
"assets/assets/fonts/Texta-Medium.ttf": "826d1f00430c7bb655efb6bfe98892ee",
"assets/assets/fonts/Texta-MediumIt.ttf": "cb7faf2be4f398bacbf81d14d2dabcfa",
"assets/assets/fonts/Texta-Regular.ttf": "66ba957be79ac215d64c6d697364d87b",
"assets/assets/fonts/Texta-Thin.ttf": "8f1154bcb672aa06f6d21c1c23a5c976",
"assets/assets/fonts/Texta-ThintIt.ttf": "42f9fe77ca0f17dd5269417e218c0ef9",
"assets/assets/fonts/TextaAlt-Black.ttf": "244530ceeefaa9ad6185e9aa403b466a",
"assets/assets/fonts/TextaAlt-BlackIt.ttf": "2513674a688c139e857c67ce496f7d95",
"assets/assets/fonts/TextaAlt-Bold.ttf": "997ae8af453368276991a3eac21893c8",
"assets/assets/fonts/TextaAlt-BoldIt.ttf": "47b911d02da1b9e73bdfcc88dcdf77b7",
"assets/assets/fonts/TextaAlt-BookIt.ttf": "9476a7909c80c32bf692d375625147b9",
"assets/assets/fonts/TextaAlt-Heavy.ttf": "e05fa318518c5735c2c5a919936a380a",
"assets/assets/fonts/TextaAlt-HeavyIt.ttf": "3fce42009ad6e303b6b4bb78ed803bcc",
"assets/assets/fonts/TextaAlt-It.ttf": "f4d8148d710a1d59d09583778c7ccabf",
"assets/assets/fonts/TextaAlt-Light.ttf": "db0e585bb49bd7fd1399ba16c198c768",
"assets/assets/fonts/TextaAlt-LightIt.ttf": "71530be8a915f5a207c23f243f1876d9",
"assets/assets/fonts/TextaAlt-Medium.ttf": "46570a447626716761bc567b66d16cdb",
"assets/assets/fonts/TextaAlt-MediumIt.ttf": "99131db45dbb088b657db659d28178b9",
"assets/assets/fonts/TextaAlt-Regular.ttf": "517d3bcc568bd426c9bd90e4c9384cc4",
"assets/assets/fonts/TextaAlt-Thin.ttf": "16b150ed27cd6d5cf9f8d3c652f9fdd5",
"assets/assets/fonts/TextaAlt-ThintIt.ttf": "84421928b28a71bd196b9b19fa56a0cb",
"assets/assets/fonts/textabook.ttf": "26cc4bf013aa59475d90be8df96a2ef5",
"assets/assets/fonts/TextaBook2.ttf": "75bbd669a3713f3e27b0beeb61eaab9a",
"assets/assets/home_ol.png": "1fd72a0b4ab396a013402e6f5a5bccd6",
"assets/assets/mail.png": "406f2ffcfb5478556df1eae81601e0c5",
"assets/assets/menu_calendar.png": "23acc0c8ff1da1a07370fe4b87f6d475",
"assets/assets/menu_home.png": "ab32dc0c5e2c6111a8a52bf7adf9655d",
"assets/assets/menu_onboarding.png": "8d2b6073510603e21ed844aabdfd2c78",
"assets/assets/menu_recruitment.png": "61d1794424b32d4d267e08a61b20a85a",
"assets/assets/menu_report.png": "4879ce54c5babb60472e28f4ba36496c",
"assets/assets/menu_settings.png": "35c279ef9c74ceccda6a819f54a32969",
"assets/assets/more.png": "48872501243cd173e89b04d1693ae5f2",
"assets/assets/phone.png": "0ae2f66e3ecf9b2e87b2a9aeb1a86422",
"assets/assets/search.png": "cacefd7d9d9dae0977ff022243433e8d",
"assets/assets/send.png": "1df0d1a089c1bee052ae276e864ccc06",
"assets/FontManifest.json": "23933a71f1ce777eb5a4bf39a2d31d3b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "1f0dda885d6f50cce1dcce0b0ceee8e4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"favicon.png": "1e0c2425b2bd02f524e0379e992334a2",
"icons/Icon-192.png": "1e0c2425b2bd02f524e0379e992334a2",
"icons/Icon-512.png": "1e0c2425b2bd02f524e0379e992334a2",
"index.html": "d2ef1741284831aec79ac1c2a00f4eb5",
"/": "d2ef1741284831aec79ac1c2a00f4eb5",
"main.dart.js": "bb40f2886dded69e34fd29d10d6d9992",
"manifest.json": "e91def9277c9554aa4acd4c5bcad232e",
"style.css": "aed5cc443e508ccb86412bb2cda63eb2",
"version.json": "2a83df5b9f89633e79c84213588989af"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
