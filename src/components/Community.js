export function Community() {
  return (
    <ul className="grid sm:grid-cols-2 gap-6 xl:gap-8">
      <li>
        <a
          href="https://github.com/hex-digital/captaincss/discussions"
          className="flex items-start space-x-4"
        >
          <svg fill="currentColor" className="flex-none text-gray-900 w-12 h-12">
            <rect width="48" height="48" rx="12" />
            <path
              d="M23.997 12a12 12 0 00-3.792 23.388c.6.12.816-.264.816-.576l-.012-2.04c-3.336.72-4.044-1.608-4.044-1.608-.552-1.392-1.332-1.764-1.332-1.764-1.08-.744.084-.72.084-.72 1.2.084 1.836 1.236 1.836 1.236 1.08 1.824 2.808 1.296 3.492.996.12-.78.42-1.308.756-1.608-2.664-.3-5.46-1.332-5.46-5.928 0-1.32.468-2.388 1.236-3.228a4.32 4.32 0 01.12-3.168s1.008-.324 3.3 1.224a11.496 11.496 0 016 0c2.292-1.56 3.3-1.224 3.3-1.224.66 1.644.24 2.88.12 3.168.768.84 1.236 1.92 1.236 3.228 0 4.608-2.808 5.616-5.484 5.916.432.372.816 1.104.816 2.22l-.012 3.3c0 .312.216.696.828.576A12 12 0 0023.997 12z"
              fill="currentColor"
              className="text-gray-50"
            />
          </svg>
          <div className="flex-auto">
            <h3 className="font-bold text-gray-900">GitHub Discussions</h3>
            <p>Connect with members of the CaptainCSS community.</p>
          </div>
        </a>
      </li>
      <li>
        <a href="https://twitter.com/jamiew_tv" className="flex items-start space-x-4">
          <svg fill="currentColor" className="flex-none text-light-blue-400 w-12 h-12">
            <rect width="48" height="48" rx="12" />
            <path
              d="M37.127 15.989h-.001a11.04 11.04 0 01-3.093.836 5.336 5.336 0 002.37-2.932 10.815 10.815 0 01-3.421 1.284 5.42 5.42 0 00-3.933-1.679c-2.976 0-5.385 2.373-5.385 5.3-.003.406.044.812.138 1.207a15.351 15.351 0 01-11.102-5.54 5.235 5.235 0 00-.733 2.663c0 1.837.959 3.461 2.406 4.413a5.338 5.338 0 01-2.449-.662v.066c0 2.57 1.86 4.708 4.32 5.195a5.55 5.55 0 01-1.418.186c-.34 0-.68-.033-1.013-.099.684 2.106 2.676 3.637 5.034 3.68a10.918 10.918 0 01-6.69 2.269 11.21 11.21 0 01-1.285-.077 15.237 15.237 0 008.242 2.394c9.918 0 15.337-8.077 15.337-15.083 0-.23-.006-.459-.017-.683a10.864 10.864 0 002.686-2.746l.007.008z"
              fill="currentColor"
              className="text-light-blue-50"
            />
          </svg>
          <div className="flex-auto">
            <h3 className="font-bold text-gray-900">Twitter</h3>
            <p>Follow on Twitter for news and updates.</p>
          </div>
        </a>
      </li>
    </ul>
  )
}
