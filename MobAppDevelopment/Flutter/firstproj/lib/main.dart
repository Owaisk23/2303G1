import 'package:device_preview/device_preview.dart';
// import 'package:firstproj/ApiProduct.dart';
import 'package:firstproj/BillCalculator.dart';

// import 'package:firstproj/SongApp.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

void main() => runApp(
  DevicePreview(
    enabled: !kReleaseMode,
    builder: (context) => MyApp(), // Wrap your app
  ),
);

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // useInheritedMediaQuery: true,
      locale: DevicePreview.locale(context),
      builder: DevicePreview.appBuilder,
      theme: ThemeData.light(),
      darkTheme: ThemeData.dark(),
      home:  BillCalculator(),
      debugShowCheckedModeBanner: false,
    );
  }
}