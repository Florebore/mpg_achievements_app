import 'package:flame/flame.dart';
import 'package:flame/game.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:mpg_achievements_app/mpg_pixel_adventure.dart';

// must be async because device loads fullScreen and setsLandscape and then at last the joystick
void main() async {
  //Wait until the Flutter Widget is initialised
  WidgetsFlutterBinding.ensureInitialized();
  //Game then runs in Fullscreen mode and Landscape
  await Flame.device.fullScreen();
  await Flame.device.setLandscape();
  //reference to our class where the game is programmed
  PixelAdventure game = PixelAdventure();
  //just helps to not load the game every time you change something in the code only for development
  //later changed to only game when deploying
  runApp(GameWidget(game: kDebugMode ? PixelAdventure() : game));
}
