const { spawn } = require('child_process')
const player = require('play-sound')()

const command = process.argv.slice(2)[0]

if (command === 'build') {
  const buildProcess = spawn(command, [], { stdio: 'inherit' })

  player.play('./test.mp3', (err) => {
    if (err) {
      console.log(`Error playing audio file: ${err}`)
    } else {
      console.log('Audio file started playing')
    }
  })

  buildProcess.on('exit', () => {
    player.stop()
    console.log('Audio file stopped playing')
  })
} else {
  console.log(`Command "${command}" not recognized`)
}
