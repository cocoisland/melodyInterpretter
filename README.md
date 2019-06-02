# Classical Piano Composer
This project is to train model and output midi with polytonic pitch and velocity. 

Training model parameters that has impact on resultant output:
LSTM:
By trial and error, it is found that using hidden layer LSTM 512 would cause the model training to more likely get stuck at local minima with loss unable to get down below 1.0 . By using hidden layer LSTM 256 and no dropout, the training model is able to get past most local minima to achieve min loss. LSTM is liken to the layer of hidden memory in the model. The higher the number of LSTM, the finer the model remembers the learning. The finer memory is able to learn song with more varying pitches and less repeating pitches. The downside is, finer memory model is more likely to get stuck at local minima during training. Lower LSTM 256 or LSTM 128, is less likely to get stuck at local minima, but the resultant output would contain less pitches variation and more repeating pitches. Using personal laptop with 8 cpu core to train a LSTM 512 model to learn 5-10 songs, could take up to 8 hours to reach global minima loss. Using Google colaboratory notebook with GPU activated, the training time can cut down to 4 hours. Training LSTM 256 or 128, generally takes a few hours or less.

Length of training character sequence:
By default the training model uses every next 100 characters to train each preceding character. By changing length of training character, the training model is able to learn most frequent pitch occurrings in the batch of training character sequence.

Pitch and Velocity - 
Pitch refers to the changing notes on the octave of a piano keyboard. Velocity refers to the speed of hitting each note on the keyboard.
By default the model parsed input midi file, extracted the pitch attributes of the song and translated an integer representation in order to be train by the model. To enhance the model ability to learn not only pitch style of a composer, I modified the model to parse, extracted and translate the velocity attributes of the song played by the composer along with the pitch attribute. This means the modified model can now train and learn on both pitch and velocity. This enables the model to closer mimic the style of playing by the original song composer. The resultant midi output does contain a rich variation of changing pitches and velocity. But human species has evolved to appreciate music as repeating rhythmatic sound. Rich variation of changing pitches and velocity sound, would give a chaotic noisy listening experience.

Usage:
1. source classic_venv/bin/activate
2. python lstm.py
3. cp latest_weights to weights.hdf5
4. python predict.py
5. python testout.py
# Classical Piano Composer
This project is to train model and output midi with polytonic pitch and velocity. 

### Training model parameters that has impact on resultant output:
LSTM:
By trial and error, it is found that using hidden layer LSTM 512 would cause the model training to more likely get stuck at local minima with loss unable to get down below 1.0 . By using hidden layer LSTM 256 and no dropout, the training model is able to get past most local minima to achieve min loss. LSTM is liken to the layer of hidden memory in the model. The higher the number of LSTM, the finer the model remembers the learning. The finer memory is able to learn song with more varying pitches and less repeating pitches. The downside is, finer memory model is more likely to get stuck at local minima during training. Lower LSTM 256 or LSTM 128, is less likely to get stuck at local minima, but the resultant output would contain less pitches variation and more repeating pitches. Using personal laptop with 8 cpu core to train a LSTM 512 model to learn 5-10 songs, could take up to 8 hours to reach global minima loss. Using Google colaboratory notebook with GPU activated, the training time can cut down to 4 hours. Training LSTM 256 or 128, generally takes a few hours or less.

### Length of training character sequence:
By default the training model uses every next 100 characters to train each preceding character. By changing length of training character, the training model is able to learn most frequent pitch occurrings in the batch of training character sequence.

### Pitch and Velocity - 
Pitch refers to the changing notes on the octave of a piano keyboard. Velocity refers to the speed of hitting each note on the keyboard.
By default the model parsed input midi file, extracted the pitch attributes of the song and translated an integer representation in order to be train by the model. To enhance the model ability to learn not only pitch style of a composer, I modified the model to parse, extracted and translate the velocity attributes of the song played by the composer along with the pitch attribute. This means the modified model can now train and learn on both pitch and velocity. This enables the model to closer mimic the style of playing by the original song composer. The resultant midi output does contain a rich variation of changing pitches and velocity. But human species has evolved to appreciate music as repeating rhythmatic sound. Rich variation of changing pitches and velocity sound, would give a chaotic noisy listening experience.

#### Usage:
1. source classic_venv/bin/activate
2. python lstm.py
3. cp latest_weights to weights.hdf5
4. python predict.py
5. python testout.py
