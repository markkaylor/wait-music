#!/usr/bin/env node
const { spawn } = require('child_process')
const path = require('path')
const player = require('play-sound')()
const commands = process.argv.slice(2)

console.log(`Time to jam while we wait for "${commands.join(' ')}"`)
const child = spawn(commands.join(' '), { shell: true, stdio: 'inherit' })

// Play music when the commands starts
const audio = player.play(path.join(__dirname, 'music', 'elevator.mp3'), () => {
  console.error(`Failed to play music, you will have to jam out some other way`)
})

// Stop music when the commands ends
child.on('exit', () => {
  audio.kill()
})
