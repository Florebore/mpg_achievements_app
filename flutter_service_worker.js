'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "905fef0da5bdc8b75990a0e747ff00b8",
"main.dart.mjs": "4fa883d28df12eb136c52cc1987e0267",
"index.html": "7c7c6f462fc21cf1b96f324807d2ba97",
"/": "7c7c6f462fc21cf1b96f324807d2ba97",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "8b02ce2d516716164a43cc0f1a14199d",
"assets/assets/shaders/lighting.frag": "d4a82e0c7b01e355575f2d4c8134f296",
"assets/assets/shaders/srcBlendModeGreater0.frag": "d59ee2171247d51aa6a9e85f909393f6",
"assets/assets/yarn/test.yarn": "1ab2538e1cdb7d39aa4fe72688be96cc",
"assets/assets/images/Traps/Saw/Off.png": "66d27386fec46e0b052941957d9bdc22",
"assets/assets/images/Traps/Saw/Chain.png": "69669f8f421b508058cdf1232dc49e28",
"assets/assets/images/Traps/Saw/On%2520(38x38).png": "817477a39df8b330334e3866c1cb574b",
"assets/assets/images/Hello.png": "a55305158db44491131714a2496e6054",
"assets/assets/images/20%2520Enemies.png": "73730ecfde474d999a027b06288751b6",
"assets/assets/images/Background/City_Dirty/2.Buildings.png": "b449973e216a028dd7a5244de61fa1ff",
"assets/assets/images/Background/City_Dirty/1.Sky.png": "f832abfc233fa4a576f66d6b8cc8419a",
"assets/assets/images/Background/City_Dirty/4.Sidewalk.png": "bbbedf8880237fe26d37c377b6381cf5",
"assets/assets/images/Background/City_Dirty/3.Wall.png": "5ef7994cf3b9b0c090a887673c5ec4ea",
"assets/assets/images/Background/Brown.png": "45c9c887fa73b0ade76974de63ab9157",
"assets/assets/images/Background/main_menu.png": "b08852638d7f8e11ea97463902c317ec",
"assets/assets/images/Background/Purple.png": "f8cc6aa8fd738e6e4db8b6607b7e6c37",
"assets/assets/images/Background/Gray.png": "31fb9bc36ec926ee64d999d3387b7e09",
"assets/assets/images/Background/Black.png": "0a69c9e50804bd91569f2f193b77b8e5",
"assets/assets/images/Background/Yellow.png": "c3f96416e21f366bc0c3635ce5b530d5",
"assets/assets/images/Background/Blue.png": "f86e07aab82505fc49710152f83cc385",
"assets/assets/images/Background/City_Clean/2.Buildings.png": "b449973e216a028dd7a5244de61fa1ff",
"assets/assets/images/Background/City_Clean/1.Sky.png": "f832abfc233fa4a576f66d6b8cc8419a",
"assets/assets/images/Background/City_Clean/4.Sidewalk.png": "b06d5897ad1d3e7dda9ce9c2a974cf31",
"assets/assets/images/Background/City_Clean/3.River.png": "7e6de4f0ebbad06abe878baf7044068c",
"assets/assets/images/Background/Pink.png": "31b5e360eb9610c58138bb7cfdfb96a1",
"assets/assets/images/Background/Green.png": "e6eeace8a9d516f2e9768e5228e824fb",
"assets/assets/images/MPG_low_resolution_640_368.png": "213d567c7953f7cf7a6d2688ae6c66cd",
"assets/assets/images/Items/Fruits/Orange.png": "60e0f68620c442b9403a477bbe3588ed",
"assets/assets/images/Items/Fruits/Cherries.png": "fc2a60aee885c33d0d10e643157213e4",
"assets/assets/images/Items/Fruits/Strawberry.png": "568a3f91b8f6102f1b518c1aba0e8e09",
"assets/assets/images/Items/Fruits/Apple.png": "de3dbfa7d33e6bb344d0560e36d8bf53",
"assets/assets/images/Items/Fruits/Melon.png": "eb6f978fbf95d76587bcf656c649540b",
"assets/assets/images/Items/Fruits/Pineapple.png": "0740bf84a38504383c80103d60582217",
"assets/assets/images/Items/Fruits/Collected.png": "0aa8cdedde5af58d5222c2db1e0a96de",
"assets/assets/images/Items/Fruits/Bananas.png": "03466a1dbd95724e705efe17e72c1c4e",
"assets/assets/images/Items/Fruits/Kiwi.png": "3d903dd9bf3421c31a5373b0920c876e",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(Flag%2520Idle)%2520(64x64).png": "dd8752c20a0f69ab173f1ead16044462",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(No%2520Flag)%2520(64x64).png": "9126203dc833ec3b7dfb7a05e41910e5",
"assets/assets/images/Items/Checkpoints/Checkpoint/Checkpoint%2520(Flag%2520Out)%2520(64x64).png": "c4730e5429a75691e2d2a9351c76738e",
"assets/assets/images/tiles/IndustrialTile_48.png": "0cd7e075af5b276fe299a75425ab0aa2",
"assets/assets/images/tiles/IndustrialTile_34.png": "ad530306c9fa7a8b600b1b7a31024e4b",
"assets/assets/images/tiles/IndustrialTile_40.png": "9d6bbdebcb99f1c2248a2761f41cb554",
"assets/assets/images/tiles/IndustrialTile_60.png": "ca89519ed567be35328988c6e1ad3bb9",
"assets/assets/images/tiles/IndustrialTile_08.png": "10fe8abf9e78661fe86d0eeeca60d312",
"assets/assets/images/tiles/IndustrialTile_29.png": "44adf892b535d01d280baa32f80a272b",
"assets/assets/images/tiles/IndustrialTile_44.png": "1dae83614c454080ce632e9dc5c8ec68",
"assets/assets/images/tiles/IndustrialTile_10.png": "1a76a02e8e3071851b3847d3637c1f81",
"assets/assets/images/tiles/IndustrialTile_25.png": "6e9e2adec01dd8cff1177e675fade597",
"assets/assets/images/tiles/IndustrialTile_14.png": "84b2bb14553e83a114de5c471837923d",
"assets/assets/images/tiles/IndustrialTile_45.png": "b814fcb646b5a2fe17795538acf7e8b2",
"assets/assets/images/tiles/background_dark.png": "0b3b89ab6fd44148efd8f72246476ebe",
"assets/assets/images/tiles/IndustrialTile_57.png": "d874743bbc239d0ef514d70476080fb5",
"assets/assets/images/tiles/IndustrialTile_75.png": "9e68765184cdda3552055cacda707606",
"assets/assets/images/tiles/IndustrialTile_58.png": "2aee9f78d8ee8eee9307895c8672fdbd",
"assets/assets/images/tiles/3_Far_Background_Tile.png": "10509de29def6d7d0b1fa59146e0ce75",
"assets/assets/images/tiles/IndustrialTile_05.png": "6f13e4c9157f5945af01f42effae3138",
"assets/assets/images/tiles/IndustrialTile_16.png": "2bf3493439281676fb9f4811905b3bc4",
"assets/assets/images/tiles/1_Industrial_Tileset_1C.png": "87d170c762112742c017713fb5392e60",
"assets/assets/images/tiles/IndustrialTile_69.png": "488ee41ff521f20cf177fa79ff805268",
"assets/assets/images/tiles/IndustrialTile_59.png": "83e9d6763850953a9b307a29d651e6e1",
"assets/assets/images/tiles/grass_concrete.png": "a99176fc9f6760187041ec0e625b5b2e",
"assets/assets/images/tiles/IndustrialTile_43.png": "abf5e631a0402936b31c4fba22669cb0",
"assets/assets/images/tiles/IndustrialTile_39.png": "154b08175229321deeddecaea245c4ad",
"assets/assets/images/tiles/IndustrialTile_72.png": "841f73725af83d686baf4efeaf650960",
"assets/assets/images/tiles/IndustrialTile_78.png": "c0d39339163d51d3195543de57fdb359",
"assets/assets/images/tiles/4_Foreground_1B_Tile.png": "9f1d2e7a1961c35d6ad561e7256800d6",
"assets/assets/images/tiles/IndustrialTile_28.png": "c0aa34e2133ac89fe243f3f4eca04819",
"assets/assets/images/tiles/IndustrialTile_71.png": "62fc9e33f2ec6ba120297c7dbe61a66b",
"assets/assets/images/tiles/IndustrialTile_70.png": "5aed2bb0131570979dc287b405bc1dd1",
"assets/assets/images/tiles/IndustrialTile_62.png": "312e413f8660a6a8fe35fcf564ab409d",
"assets/assets/images/tiles/2_Industrial_Tileset_1C_Background_Violet.png": "f2e4df1045e9d56c347414ca8d8dc19a",
"assets/assets/images/tiles/IndustrialTile_01.png": "c51979b340c5c175a1165ad4409cd7fa",
"assets/assets/images/tiles/IndustrialTile_74.png": "9b84e12e71fc85bb678a93b8bbd9816b",
"assets/assets/images/tiles/IndustrialTile_03.png": "36401818db63e6c7f8ead08f89c9d1ba",
"assets/assets/images/tiles/IndustrialTile_26.png": "6df46c9f3729b0edd798273db8427d0a",
"assets/assets/images/tiles/IndustrialTile_52.png": "a0c95a3c364b803a9740600ec7cfa499",
"assets/assets/images/tiles/1_Mine_Tileset_1.png": "1bcfd8f9ba28868fa9e7a19859268338",
"assets/assets/images/tiles/IndustrialTile_47.png": "80961a4f1f313671dba0f0c77c8314ff",
"assets/assets/images/tiles/IndustrialTile_07.png": "8596051879c5c792c8df7aac18834e1d",
"assets/assets/images/tiles/IndustrialTile_04.png": "a88e2960161ef84df580e1c4ff7c0385",
"assets/assets/images/tiles/IndustrialTile_33.png": "27c093582d04f0793632f0a4db8f945b",
"assets/assets/images/tiles/IndustrialTile_79.png": "388cd7517a6641f6c4c19d1ce2e5ffb6",
"assets/assets/images/tiles/IndustrialTile_36.png": "e6a7ffbe6ab3c3956a1122a49c5e2cb0",
"assets/assets/images/tiles/IndustrialTile_67.png": "c3ad4b894ca6173a00a42372816b57e4",
"assets/assets/images/tiles/IndustrialTile_73.png": "0b730c9ac731c4d4d2855de48041f17b",
"assets/assets/images/tiles/IndustrialTile_49.png": "8cee467990c9f9e3f3c128e10b7b6a7a",
"assets/assets/images/tiles/IndustrialTile_55.png": "ecda90d9e6a71a89a4b01e16002acc04",
"assets/assets/images/tiles/IndustrialTile_80.png": "03b64c3ac6669eb60462fb9212e052a3",
"assets/assets/images/tiles/4_Foreground_1_Tile.png": "6a1bb780fcfa2c4ffda47f0239b45a91",
"assets/assets/images/tiles/IndustrialTile_12.png": "c8218e5a2030fb173b3a59aab5c083f9",
"assets/assets/images/tiles/IndustrialTile_15.png": "5823ef3b4b7f9032df27728079e703a9",
"assets/assets/images/tiles/IndustrialTile_13.png": "72de39a0a707ac5b1b64cd39ab067b5f",
"assets/assets/images/tiles/IndustrialTile_11.png": "91e8c5688c0d7e708365d4172ec581d3",
"assets/assets/images/tiles/IndustrialTile_61.png": "1e0a4930bd436fc7573a22c325ade045",
"assets/assets/images/tiles/IndustrialTile_56.png": "43a32ea9cde4be28d7b7e01bcd736252",
"assets/assets/images/tiles/IndustrialTile_77.png": "ba3c9c431301bbe23704d22e62f00bf7",
"assets/assets/images/tiles/IndustrialTile_68.png": "5251440ca9775301d166c8d26b593c34",
"assets/assets/images/tiles/1_Industrial_Tileset_1.png": "c861b35a95eb465d8b681f089950865b",
"assets/assets/images/tiles/IndustrialTile_20.png": "e6b24b9c8c8892a1e2cff6ca5b357285",
"assets/assets/images/tiles/IndustrialTile_81.png": "e64f2ff9536cd34ffb23ab9d57cf1f1e",
"assets/assets/images/tiles/IndustrialTile_19.png": "1dad1c4c6b62258aa6577ae96637a698",
"assets/assets/images/tiles/Mine_Tileset_1B.png": "5d31cc95f1ded3c535291433b8a5c970",
"assets/assets/images/tiles/IndustrialTile_37.png": "531aa103a40e80d4246d86fb3c989c03",
"assets/assets/images/tiles/IndustrialTile_32.png": "57f2accc4376c1c3f4e3f0354a5a96fa",
"assets/assets/images/tiles/0_Template_Tileset.png": "97b4d31bd885a1bd8c1c0f933a1db690",
"assets/assets/images/tiles/IndustrialTile_51.png": "04766680d46da4d95ba4cef15007efcd",
"assets/assets/images/tiles/IndustrialTile_54.png": "3add958d42174d2e445e0d911085f5ab",
"assets/assets/images/tiles/IndustrialTile_02.png": "0d8af0fa9444df0d993d90d804b075f0",
"assets/assets/images/tiles/IndustrialTile_18.png": "a94acbd8350f1a5d53ebf931d4c8abb5",
"assets/assets/images/tiles/IndustrialTile_38.png": "8d35be051025673c2e8a7fbed6e64d4c",
"assets/assets/images/tiles/IndustrialTile_21.png": "01f523e1b38368cb4aa2180a46d50f1c",
"assets/assets/images/tiles/IndustrialTile_17.png": "3dc788dd98ee38cda9e3de2567f4f08d",
"assets/assets/images/tiles/IndustrialTile_23.png": "acfbf7831547fecb0fbfcdb896bc46f4",
"assets/assets/images/tiles/2_Industrial_Tileset_1B_Background.png": "e1ae3c92ca590684c4296f4c5dbb2d76",
"assets/assets/images/tiles/IndustrialTile_27.png": "1e45259c4cb8134b9ab3b86ed1078c69",
"assets/assets/images/tiles/IndustrialTile_35.png": "2c6db5e9eca81703ffc4d87a581a1228",
"assets/assets/images/tiles/IndustrialTile_76.png": "664c56b4f411d2758bc8c0ad9e5dad9b",
"assets/assets/images/tiles/IndustrialTile_41.png": "258c150abeb5d816d20d4fd79a9b869e",
"assets/assets/images/tiles/IndustrialTile_09.png": "20220888ea22ede4a4da31ace8668570",
"assets/assets/images/tiles/IndustrialTile_63.png": "0dda4e390201977958281127e86fb7b1",
"assets/assets/images/tiles/IndustrialTile_53.png": "afa9d96b5ba6be197381b4f3719793f2",
"assets/assets/images/tiles/2_Mine_Tileset_1_Background.png": "b9de3f411f643e0c5bd7b6ecf343489f",
"assets/assets/images/tiles/1_Industrial_Tileset_1B.png": "578e6eb95cac1a1dd1630671e5c13f08",
"assets/assets/images/tiles/2_Industrial_Tileset_1_Background.png": "585f98e87670bf8c6eaeef8520604242",
"assets/assets/images/tiles/IndustrialTile_66.png": "c5ed8c5fe8254381c834105ce6f5acbf",
"assets/assets/images/tiles/IndustrialTile_22.png": "9eeb9726e9cd305daa603366616415fb",
"assets/assets/images/tiles/IndustrialTile_64.png": "870bd395df6410e419fc9ae43784d2b6",
"assets/assets/images/tiles/IndustrialTile_24.png": "a47ce9b6914150b35d5be18dda32bbf3",
"assets/assets/images/tiles/Mine_Tileset_1B_Background.png": "e13f4fb9a71ae12494bc1942f687ff84",
"assets/assets/images/tiles/IndustrialTile_42.png": "788416d8ce659477a191402d4562ee83",
"assets/assets/images/tiles/background_light.png": "f346761878143b9b2eed9a1480fac536",
"assets/assets/images/tiles/IndustrialTile_46.png": "1f9175850fb2cde446efbca6a080b88f",
"assets/assets/images/tiles/IndustrialTile_06.png": "d21f8bd461fa9426565c0de79a8c1339",
"assets/assets/images/tiles/IndustrialTile_65.png": "3f2714b3c1d436024c71f52722bc5439",
"assets/assets/images/tiles/IndustrialTile_50.png": "96e7cdb831f6c801a8e9a508673efbda",
"assets/assets/images/tiles/IndustrialTile_31.png": "457d9e2af0948ebd4ec48ceb8ec69f70",
"assets/assets/images/tiles/IndustrialTile_30.png": "9835642c5ea57460ad518e1c4701425a",
"assets/assets/images/Explosions/explosion1d/explosion1d%2520(128x128).png": "3e6543123831cf47b436bfac0e5bc8d2",
"assets/assets/images/Explosions/explosion1d/Preview.gif": "5bfcf0161a909aff96f17c39756823d9",
"assets/assets/images/objects/8.png": "f835237ab477270762c42339901e2bd6",
"assets/assets/images/objects/3.png": "687a9582130fcd4f397319f5464adf66",
"assets/assets/images/objects/Fence1.png": "3d05ba7d03d1b213d9033d25ae76d28d",
"assets/assets/images/objects/Locker3.png": "14742a631b5440868f246052dec42060",
"assets/assets/images/objects/Barrel1.png": "55fba132bb749dfcf7876abe15a96d97",
"assets/assets/images/objects/1.png": "e2e60c997e904cce353c67704323127b",
"assets/assets/images/objects/Box1.png": "7ffa02f24f3ec0800e7762d343780c18",
"assets/assets/images/objects/2.png": "7f10259ca2948797ff415dcd262b0eea",
"assets/assets/images/objects/Locker2.png": "f5d703c376c77cf30c2b1ac9e9d765a9",
"assets/assets/images/objects/9.png": "1a5ef6ec766789730c5fc0ea175f0a77",
"assets/assets/images/objects/Barrel2.png": "a5ecb0cac64069fb191b51c231597c7c",
"assets/assets/images/objects/Fire-extinguisher3.png": "4388d43c0ee01ade731ef766a46ad8a2",
"assets/assets/images/objects/Ladder3.png": "2b8843ef92fbffb4ffcb6095e12bdab2",
"assets/assets/images/objects/Box6.png": "a543d90bb34a586e1497e9bf0e5a58e5",
"assets/assets/images/objects/Pointer1.png": "4e5c8f413c762f3ed50d61618920c605",
"assets/assets/images/objects/Board2.png": "3f4b439a6b8dd28d3792dc020a7767e7",
"assets/assets/images/objects/0.png": "ac57847014428dc1bbdcf2ba43f82b46",
"assets/assets/images/objects/Box2.png": "bda34a349d6409bbc6bb7c85c21d6e7c",
"assets/assets/images/objects/Barrel4.png": "6980fdcb7bff55cbf3c575521bc7c7ad",
"assets/assets/images/objects/Box8.png": "f0f91f953133a1ab76a84dd81ad243bd",
"assets/assets/images/objects/4.png": "6ce9e74933128bfee93ddf242e67cb84",
"assets/assets/images/objects/Box4.png": "1579c8cb1f113c3f78f1b9822d46b6a5",
"assets/assets/images/objects/Fire-extinguisher2.png": "1a1cec77baf69813c88217774f4d5489",
"assets/assets/images/objects/Box7.png": "39944c2519a3cebb71298c4b0f9a56f9",
"assets/assets/images/objects/Fence3.png": "9e395e9502cba4866103cfc79d67912e",
"assets/assets/images/objects/Flag.png": "6e5bd1a4406bf1bee88603827c00ca50",
"assets/assets/images/objects/Fence2.png": "892bf680429118d030c282e31d4f69fb",
"assets/assets/images/objects/Barrel3.png": "b822feeabac0a265cc56dd94f3f1301f",
"assets/assets/images/objects/Bucket.png": "e4eb3653564667d6f986a87221260452",
"assets/assets/images/objects/Box3.png": "740b378b348a05dd77e7578c40531d6a",
"assets/assets/images/objects/7.png": "6d67d0c57c585d4b01e68dc303470675",
"assets/assets/images/objects/6.png": "244dd4f09bfb921c7307ada3483e1cdb",
"assets/assets/images/objects/Board1.png": "4779ee02691c948720dc210c92a6dbd8",
"assets/assets/images/objects/Fire-extinguisher1.png": "604d684b74893a7e18ad12818aea71a2",
"assets/assets/images/objects/Box5.png": "8eb59e4ae1f63f7ecd20a46344e1752f",
"assets/assets/images/objects/Board3.png": "b90cdc658d312a674e238598e18a9b4b",
"assets/assets/images/objects/Ladder2.png": "e0263f7f1158de815290dc4269b93389",
"assets/assets/images/objects/Locker4.png": "4858ba3cf81a93a32ade79dd309bcdcb",
"assets/assets/images/objects/Bench.png": "ac2920307af241c9185dcd89e35de9f0",
"assets/assets/images/objects/Locker1.png": "85ac72c531393152945507481de96a73",
"assets/assets/images/objects/Mop.png": "8cc90128693c15c3460ba5554ac8b420",
"assets/assets/images/objects/5.png": "c6ae7dc4dcc1222154ae8f0a80996d2a",
"assets/assets/images/objects/Pointer2.png": "13c5bf11816ad2a556fb39963428558b",
"assets/assets/images/objects/Ladder1.png": "1c34517571663daeacfa33e04260105d",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Wall%2520Jump%2520(32x32).png": "955d352171a2b666ae705b6205856ce1",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Run%2520(32x32).png": "25fcce89dfb6673a81d384091c87353d",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Hit%2520(32x32).png": "5d93268a09fb2959e1755da4ba201f9e",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Jump%2520(32x32).png": "cafaf2f48f36c9a6655a37f9c1c47b4a",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Fall%2520(32x32).png": "a20bd61d76132e4301fcfe7aa02ca9ba",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Double%2520Jump%2520(32x32).png": "c76baa04d956c9d985c79643d7b2f672",
"assets/assets/images/Main%2520Characters/Pink%2520Man/Idle%2520(32x32).png": "1b35f85f1241dc1f0597cafbe1eac7f6",
"assets/assets/images/Main%2520Characters/Disappearing%2520(96x96).png": "1284313649da02eccc0d3ed6796996a3",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Wall%2520Jump%2520(32x32).png": "552254b40eac6d10d2c3d779edb92116",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Run%2520(32x32).png": "b04bbc82dc692516a4b13c0d9d5b9ebd",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Hit%2520(32x32).png": "d03a7bbce7fbda59dd057397f86a8899",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Jump%2520(32x32).png": "99da59b514370539951a76ba1fe51821",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Fall%2520(32x32).png": "469d2d7814fa8258325eb5d305808315",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Double%2520Jump%2520(32x32).png": "5afb26aa4240eff1eab105eb3263ab83",
"assets/assets/images/Main%2520Characters/Mask%2520Dude/Idle%2520(32x32).png": "29c95dbb63a9bf44c42821aa0cf49de8",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Wall%2520Jump%2520(32x32).png": "37ec0be0f82c3750a07efa558c032ee7",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Run%2520(32x32).png": "fb191b4e6ac599286c38e496a700cfd2",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Hit%2520(32x32).png": "4c1ba2bf4e576409abbbd1aacc91d51d",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Jump%2520(32x32).png": "4f048ccbc783c8eb3824be9651da8a34",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Fall%2520(32x32).png": "ef8f3627041b7ae2a1dc76dfc3e419f3",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Double%2520Jump%2520(32x32).png": "351c1df6eb5ac94209e8e490ab816879",
"assets/assets/images/Main%2520Characters/Ninja%2520Frog/Idle%2520(32x32).png": "cb655be6f9354444720c7ce1dbd61dae",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Wall%2520Jump%2520(32x32).png": "76cbdd4a22d50bd65ac02be8a5eb1547",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Run%2520(32x32).png": "016f388a07f71a930fd79a7a806d5da8",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Hit%2520(32x32).png": "bbd39134a77e658b0b9b64ded537972c",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Jump%2520(32x32).png": "f28e95fc98b251913baf3a21d5602381",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Fall%2520(32x32).png": "5eb8c32845fad5fcc7794247eb91aed0",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Double%2520Jump%2520(32x32).png": "612926916a3e8c5deff2023722c465ac",
"assets/assets/images/Main%2520Characters/Virtual%2520Guy/Idle%2520(32x32).png": "1cb575929ac10fe13dfafa61d78ba28d",
"assets/assets/images/Main%2520Characters/Appearing%2520(96x96).png": "9449bf1f8d68ac08331aa091d6095e34",
"assets/assets/images/Terrain/Terrain%2520(16x16).png": "df891f02449c0565d51e2bf7823a0e38",
"assets/assets/images/sky/3.png": "3cffcf0c2ffedf2fec9d1c53450873a9",
"assets/assets/images/sky/1.png": "67f2a16fee7c8bda616652a80656da35",
"assets/assets/images/sky/2.png": "bc1e9d826016f151f7a3f232792aad4c",
"assets/assets/images/sky/background_1_full.png": "77fb7e44d817fa15e945247b166fd302",
"assets/assets/images/sky/4.png": "20b17e80788a098a8ad001bfc81f2a20",
"assets/assets/images/sky/background_dark_full.png": "c82f5094ce0ecd56b21920f1b63a3ed0",
"assets/assets/images/sky/background_light_full.png": "e848e34ee6381ce242e4a1bab081ec68",
"assets/assets/images/sky/5.png": "365cb3159cf576beb8110fe4f2383549",
"assets/assets/images/Pixel_ArtTop_Down/iso_tile_export.png": "feefc8d21a0406d987419d16b73d239f",
"assets/assets/images/Pixel_ArtTop_Down/iso_sprite_sheet_normalMap.png": "e4eed76c38da99205e7fcd44a3c21e68",
"assets/assets/images/Pixel_ArtTop_Down/noTextureBlock.png": "4e7d094f1b5a12807d302690f44872e0",
"assets/assets/images/Pixel_ArtTop_Down/iso_tile_export_normalMap.png": "45ff1c4aadb88e904742072b82ac56ba",
"assets/assets/images/Pixel_ArtTop_Down/iso_sprite_sheet.png": "09b00863b9bc8313309470729db07027",
"assets/assets/images/Pixel_ArtTop_Down/basic_isometric_block_normal.png": "0c8b594d822d9e59e6a8eb66e79c9509",
"assets/assets/images/Menu/Buttons/Back.png": "661cfd0fdba294a951eb63c556684a64",
"assets/assets/images/Menu/Buttons/test_button.png": "8caa5d29d99975bb5ed517c3d2ab7ea0",
"assets/assets/images/Menu/Buttons/Leaderboard.png": "e3854b8ad5633b1f8017d08b7a783047",
"assets/assets/images/Menu/Buttons/Restart.png": "45fe1343f546485e8e288b122467f2fd",
"assets/assets/images/Menu/Buttons/Levels.png": "5364f08108b6f75ff31b5b7c84f9789a",
"assets/assets/images/Menu/Buttons/test_button_2.png": "61b4ce3b8f3bb1ad15364fd261236f5b",
"assets/assets/images/Menu/Buttons/Settings.png": "a56908d71e428647c51e73af372739ab",
"assets/assets/images/Menu/Buttons/Volume.png": "60060aab64ff40a0a996820f64a308b3",
"assets/assets/images/Menu/Buttons/Close.png": "5c3a207383c5642288b01d314855a42a",
"assets/assets/images/Menu/Buttons/Next.png": "2f75777c57c36c83c6140bbd7b97a5e1",
"assets/assets/images/Menu/Buttons/Achievements.png": "b9bb58144606336efcd4862d35482f47",
"assets/assets/images/Menu/Buttons/Previous.png": "c63a3a14721d926b03801f38b81b66a6",
"assets/assets/images/Menu/Buttons/button_0.png": "53e92cb0ddf0dc7dff6150542a3203c6",
"assets/assets/images/Menu/Buttons/Play.png": "23f2b2a41eb467518bbfef795d876dc8",
"assets/assets/images/HUD/green_button_sqr.png": "96d513e58e934dd3986eb5f87ba7cf4e",
"assets/assets/images/HUD/Knob.png": "eccd09fddbb51595c45efafaff35eaf6",
"assets/assets/images/HUD/joystick2.png": "9056ad96ea8b2a8834995a7a90a36cfa",
"assets/assets/images/HUD/Joystick.png": "caf6b07ff4be697ecf9dc794c5e0a9d1",
"assets/assets/images/Idle%2520(32x32).png": "79467b1a48b8614365ffd7d53b7ae248",
"assets/assets/images/playerNormal.png": "c8421952f3614b07e19cb049cc327990",
"assets/assets/tiles/grass_concrete.tsx": "574753804b0aa93027a3e5296905fc4b",
"assets/assets/tiles/MPG_low_resolution.png": "39819bac11fc680ca968639bcaf7f5b2",
"assets/assets/tiles/industrial_tiles_4.tsx": "a8041e5c5b24f1e2f671b89a39c41bfc",
"assets/assets/tiles/industrial_tiles_bg_2.tsx": "5afb1b9696ed4cfc87fd3fac768bea89",
"assets/assets/tiles/industrial_tiles_3.tsx": "83b31be843350d9526e611227c1c7df3",
"assets/assets/tiles/MPG_pixel_adventure.tiled-project": "97165873765b29a5041f09e541be15d5",
"assets/assets/tiles/Tileset_Isometrisch_2.tsx": "e2b6976da92d94052d504f35ed5cf3ef",
"assets/assets/tiles/industrial_tiles_bg_0.tsx": "8b906a5beac5db3aab17dfa1da5ae859",
"assets/assets/tiles/MPG_pixel_adventure.tiled-session": "72bb37f86f01709d6fdc65850e847344",
"assets/assets/tiles/industrialObjects.tsx": "1bf697d41bf31fe843ec3e25f8e37d8c",
"assets/assets/tiles/testLevel.tmx": "978ea98a7808f22657e5f3ea5f1877d5",
"assets/assets/tiles/IndustrialTile_81.png.tsx": "f1d5f6b72c1f129b223bbcfce2b1003b",
"assets/assets/tiles/MPG_Start_low_res.tsx": "250cca79e8d5bd70f5b1d45b6375fe04",
"assets/assets/tiles/Level_6.tmx": "fb78ec7f30c63746c525e261f144b40b",
"assets/assets/tiles/Level_7..tmj": "8b11e926f7eb1bbb219f873e08014370",
"assets/assets/tiles/crystal%25204.tsx": "354e1c98adf7f3b8f7ec00270acb12ab",
"assets/assets/tiles/MPG_low_resolution_640_368.png": "213d567c7953f7cf7a6d2688ae6c66cd",
"assets/assets/tiles/crystal%25203.tsx": "8dfe285b300cc5eb8f4bd586cb462024",
"assets/assets/tiles/parralax_city_0.tsx": "761d92bad57f5ea89f62a065507b607e",
"assets/assets/tiles/industrial_tiles_bg_1.tsx": "3cfe89375bba5e59b35ae2082165180f",
"assets/assets/tiles/Level_3.tmx": "21bda95cff8b4e570eebc891f76d54a9",
"assets/assets/tiles/city_night.tmx": "80f07a1e66a71d99f14e15b1e07bb5f8",
"assets/assets/tiles/test.tiled-session": "b623fe4da67bb7aee8e6c4380350b048",
"assets/assets/tiles/crystal%2520stuff.tsx": "e4f5ebd03423bef399e78fd07e7362ac",
"assets/assets/tiles/Level_9.tmx": "00eac390d1054f240f4e15a5ada7c0e1",
"assets/assets/tiles/Level_2.tmx": "71af668216792bfb1d28893ff8854c54",
"assets/assets/tiles/MPG_pixel_adventure.tsx": "95031f8ea78a18b9cc7f7229cc8f1372",
"assets/assets/tiles/industrial_tiles_2.tsx": "7a1f46389aa87e1062a8ddaf53d57fb5",
"assets/assets/tiles/Level_7.tmx": "f371868ed4f199796ba7ff3fdba5013e",
"assets/assets/tiles/test.tiled-project": "97165873765b29a5041f09e541be15d5",
"assets/assets/tiles/Level_5.tmx": "5e68682e902dd6dff0fc7022e9737c28",
"assets/assets/tiles/crystal%25205.tsx": "546170c7852dfba37fceb27d4e53d4ec",
"assets/assets/tiles/isometric.tsx": "352d1b06b545024b609944477c429d02",
"assets/assets/tiles/backgrounds.tsx": "a6494cb922a5aace4c4a1e1289932e1c",
"assets/assets/tiles/Level_4.tmx": "bb9239a0160f026a8785556fff7126bd",
"assets/assets/tiles/crystal%25202.tsx": "dd88fe2ddeb1d66a62f3e8aa12d21f23",
"assets/assets/tiles/Level_8.tmx": "20b66541ac04c2f83a2c8119a24fc90a",
"assets/assets/tiles/Level_0.tmx": "35480ecf4fe79ca0dc793157556479c9",
"assets/assets/tiles/Level_1.tmx": "5e8460933e02451d2481cc1c67e25729",
"assets/assets/screens/settings.json": "16d9b173f900ebbcd1be15ae653c703b",
"assets/assets/screens/main_menu.json": "db17a1aeb7007962633a0c276f57b166",
"assets/assets/screens/speech_bubble.json": "f82fe16d2c07d6fe8e4e9c768de293c9",
"assets/assets/screens/test.json": "411378589b9db39eed82c081d7bdb249",
"assets/assets/fonts/pixel_0.ttf": "440b53b1a1c65037f944ff19259d8014",
"assets/fonts/MaterialIcons-Regular.otf": "dd9d8aca6a9500073bddf87650f7bc33",
"assets/NOTICES": "dd9709e374cbb7d726a5342c434b259d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "4c547ada6c164a77a3cfce8b7feee86d",
"assets/FontManifest.json": "0f5dda982a804a6b9cc6bdc7e5e08f66",
"assets/AssetManifest.bin": "48e31b8d30c40ae77d43bd6dc6c16b71",
"assets/AssetManifest.json": "f446d05cba01b0e9268a150e836a7237",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.wasm": "16ee25832c074adf25c863e898ad0eb0",
"flutter_bootstrap.js": "57d4cdc13aef020e4c4ed58cd685ccf7",
"version.json": "34c19c2cd3077219ac7bab3b154a5b06",
"main.dart.js": "4d5264f95428680ea143484158821a5d"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"main.dart.wasm",
"main.dart.mjs",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
