import React from 'react';
import { Image } from 'antd';
const GroupImages = () => (
  <Image.PreviewGroup
    preview={{
      onChange: (current, prev) => console.log(`current index: ${current}, prev index: ${prev}`),
    }}
  >
    <Image width={400} src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg" />
    <Image width={400} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"/>
    <Image width={400} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"/>
    <Image width={400} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"/>
    <Image width={400} src="https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"/>
  </Image.PreviewGroup>
);
export default GroupImages;