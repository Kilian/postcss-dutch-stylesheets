import postcss from 'postcss'
import expect from 'expect'
import plugin from '../src'
import properties from '../src/properties'
import values from '../src/values'

function run(input, output, opts, done) {
  return postcss([plugin(opts)])
    .process(input)
    .then((result) => {
      expect(result.css).toEqual(output)
      expect(result.warnings().length).toEqual(0)
      done()
    }).catch((error) => {
      done(error)
    })
}

function propertyTest(dutch, english, value = 'dutch') {
  it(`converts ${dutch} to ${english}`, (done) => {
    run(
      `a{ ${dutch}: ${value}; }`,
      `a{ ${english}: ${value}; }`,
      {},
      done
    )
  })
}

function valueTest(dutch, english, property = 'dutch') {
  it(`converts ${dutch} to ${english}`, (done) => {
    run(
      `a{ ${property}: ${dutch}; }`,
      `a{ ${property}: ${english}; }`,
      {},
      done
    )
  })
}

describe('postcss-dutch-stylesheets', () => {
  // Test Properties
  Object.keys(properties).forEach((property) => propertyTest(properties[property], property))

  // Test Values
  Object.keys(values).forEach((value) => valueTest(values[value], value))

  // Test important
  it('converts !belangrijk to !important', (done) => {
    run(
      'a{ color: white !belangrijk; }',
      'a{ color: white !important; }',
      {},
      done
    )
  })
})
