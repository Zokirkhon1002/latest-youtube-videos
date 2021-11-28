import React from 'react'

export const Video = ({video}) => {
    return (
        <div className="videos__items">
          <div className="video__image">
            <a target="_blank" href={video.link}>
              <img
                src={`https://i4.ytimg.com/vi/${
                  video.guid.split(":")[2]
                }/mqdefault.jpg`}
              />
            </a>
          </div>
          <div className="video__footer">
            <p>{video.title}</p>
          </div>
        </div>
    )
}

