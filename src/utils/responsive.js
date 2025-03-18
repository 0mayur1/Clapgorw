import { Dimensions, PixelRatio } from "react-native";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

// Base screen dimensions (e.g., iPhone 12)
const BASE_WIDTH = 390;
const BASE_HEIGHT = 844;

/** Scale width */
 const scaleWidth = (size) => (SCREEN_WIDTH / BASE_WIDTH) * size;

/** Scale height */
 const scaleHeight = (size) => (SCREEN_HEIGHT / BASE_HEIGHT) * size;

/** Normalize font sizes */
 const normalizeFont = (size) => {
  const scale = SCREEN_WIDTH / BASE_WIDTH;
  return PixelRatio.roundToNearestPixel(size * scale);
};

/** Export screen dimensions */
export { SCREEN_WIDTH, SCREEN_HEIGHT,scaleWidth,scaleHeight,normalizeFont };
