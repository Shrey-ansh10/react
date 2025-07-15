import React from 'react'
// import { useLoaderData } from 'react-router-dom'

function Github({data}) {

    // //using useState and useEffect
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     fetch('https://api.github.com/users/Shrey-ansh10')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // }, []);

  return (
    <div className="flex justify-center items-center min-h-[50vh] p-6">
      <div className="max-w-4xl w-full bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl shadow-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Left side - Image */}
          <div className="md:w-2/5 p-6 flex justify-center items-center bg-gray-800">
            <div className="relative">
              <div className="absolute inset-0 bg-white-200 rounded-full blur-lg opacity-20"></div>
              <img 
                src={data.avatar_url} 
                alt="GitHub Avatar" 
                className="relative rounded-full border-4 border-white/20 shadow-lg w-64 h-64 object-cover"
              />
            </div>
          </div>
          
          {/* Right side - Info */}
          <div className="md:w-3/5 p-8 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-white mb-2">{data.name || data.login}</h2>
            
            {data.bio && (
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-blue-400 uppercase tracking-wider">Bio</h3>
                <p className="text-gray-300">{data.bio}</p>
              </div>
            )}
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                <span className="block text-2xl font-bold text-white">{data.public_repos}</span>
                <span className="text-blue-400 text-sm">Repositories</span>
              </div>
              
              <div className="bg-gray-700/50 rounded-lg p-3 text-center">
                <span className="block text-2xl font-bold text-white">{data.followers}</span>
                <span className="text-blue-400 text-sm">Followers</span>
              </div>
            </div>
            
            <div className="flex space-x-3">
              <a 
                href={data.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                View on GitHub
              </a>
              
              {data.blog && (
                <a 
                  href={data.blog.startsWith('http') ? data.blog : `https://${data.blog}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Website
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Github

// //using loader instead of useEffect and useState hooks : helps loading page faster as it uses cache 
// export const githubInfoLoader = async () => {
//     const response = await fetch('https://api.github.com/users/Shrey-ansh10')
//     // const data = await response.json()
//     return response.json()
// }