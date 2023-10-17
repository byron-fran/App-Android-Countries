
import { useEffect, useState } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import { styles } from '../../layout/Likes'
import { useContext } from 'react'
import { FavoritesContext } from '../../context/FavoritesContext'
import { Countries } from '../../interfaces/Countrires'

type LikeProps ={
    country : Countries
}

const Likes : React.FC<LikeProps> =  ({country}) => {
    const {like, setLike, addFavorites, state,removeFavorite} = useContext(FavoritesContext)
 
    useEffect(() => {
        if(like){
            addFavorites(country)

            
        }
        else{
            removeFavorite(country)
        };
    
          
    }, [like ]);
    console.log(state.favorites)
    const handleLikes = () => {
        setLike(!like)
    }
    return (
        <View style={styles.containerLikes}>

            {!like ? (
                   <Pressable
                onPress={handleLikes}>
                <View >
                    <Image
                        style={styles.imgLike}
                        source={require('../../public/image/corazonBlanco.png')} />
                </View>
            </Pressable>
            ): (
          <Pressable
            onPress={handleLikes}>
                  <View>
                <Image 
                    style={styles.imgLike}
                    source={require('../../public/image/corazon.png')}/>
            </View>
          </Pressable>
            )}
         
        </View>

    )
}

export default Likes