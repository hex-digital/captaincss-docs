const descriptions = {
  cluster: 'The <code>cluster</code> object',
  frame: 'The <code>frame</code> object',
  skipLink: 'The <code>skip link</code> object',
  stack: 'The <code>stack</code> object',
  wrapper: 'The <code>wrapper</code> object',
  activeBreakpoint: 'The <code>activeBreakpoint</code> helper utility for showing what screen breakpoint is currently active',
  intrinsicCenter: 'The <code>intrinsic-center</code> utility to center flow content by its intrinsic width',
}

export function CorePluginReference() {
  return (
    <div className="prose">
      <table>
        <thead>
          <tr>
            <th>Captain Plugin</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(descriptions).map(([pluginName, description]) => (
            <tr key={pluginName}>
              <td>
                <code>{pluginName}</code>
              </td>
              <td dangerouslySetInnerHTML={{__html: description}} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
