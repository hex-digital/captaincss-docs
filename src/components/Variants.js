import { defaultConfig } from '@/utils/defaultConfig'
import { joinWithAnd } from '@/utils/joinWithAnd'
import { ConfigSample } from '@/components/ConfigSample'

export function Variants({ plugin, name, variantList = null, extra = null }) {
  const variants = defaultConfig.variants[plugin] || variantList || ['responsive']
  name = name || plugin.replace(/([a-z])([A-Z])/g, (m, p1, p2) => `${p1} ${p2.toLowerCase()}`)
  const extraVariants = (extra || ['responsive', 'hover', 'focus', 'active', 'group-hover'])
    .filter((x) => !variants.includes(x))
    .slice(0, 2)

  const opening = `By default, ${
    variants.length
      ? `only ${joinWithAnd(variants).replace('dark', 'dark mode <em>(if enabled)</em>')}`
      : 'no'
  } variants are generated for ${name} utilities.`

  let example;
  let path;
  if (extraVariants.length > 0) {
    path = 'variants.extend';
    example = <p>
      For example, this config will {variants.length > 0 ? 'also ' : ''}generate{' '}
      {joinWithAnd(extraVariants)} variants:
    </p>
  } else {
    path = 'variants';
    example = <p>
      For example, this config will disable all variants:
    </p>
  }

  return (
    <div className="prose">
      <p dangerouslySetInnerHTML={{ __html: opening }} />
      <p>
        You can control which variants are generated for the {name} utilities by modifying the{' '}
        <code>{plugin}</code> property in the <code>variants</code> section of your{' '}
        <code>tailwind.config.js</code> file.
      </p>
      {example}
      <ConfigSample path={path} before="..." add={{ [plugin]: extraVariants }} />
    </div>
  )
}
