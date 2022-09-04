
//
// StyleDictionaryColor.h
//

// Do not edit directly
// Generated on Sun, 04 Sep 2022 14:21:09 GMT


#import <UIKit/UIKit.h>

typedef NS_ENUM(NSInteger, StyleDictionaryColorName) {
ColorBaseGrayLightXxx,
ColorBaseGrayMediumXxx,
ColorBaseGrayDarkXxx,
ColorBaseRedXxx,
ColorBaseGreenXxx,
ColorFontBaseXxx,
ColorFontSecondaryXxx,
ColorFontTertiaryXxx
};

@interface StyleDictionaryColor : NSObject
+ (NSArray *)values;
+ (UIColor *)color:(StyleDictionaryColorName)color;
@end
