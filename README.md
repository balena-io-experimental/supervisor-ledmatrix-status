# supervisor-ledmatrix-status

Display supervisor statuses via an Adafruit 8x8 I2C LED matrix backpack (ht16k33) <https://shop.pimoroni.com/products/adafruit-mini-8x8-led-matrix-w-i2c-backpack>

![led matrix image](https://cdn.shopify.com/s/files/1/0174/1800/products/870_large.jpg)

## Configure via [environment variables](https://docs.resin.io/management/env-vars/)

Variable Name          | Default      | Description
---------------------- | ------------ | -----------------------------------------
LED_MATRIX_I2C_ADDRESS | `0x70`       | the i2c address of the LED matrix
LED_MATRIX_I2C_BUS     | `/dev/i2c-1` | the i2c bus the LED matrix is attached to
