import { useState, useEffect } from "react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";

export const useFetchMediaItems = (isWatched) => {
  const [mediaItems, setMediaItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const fetchMediaItems = async () => {
      try {
        const params = {};
        if (isWatched) params.watched = true;

        const mediaType = searchParams.get('media_type');
        if (mediaType) {
          params.media_type = mediaType;
        }

        const response = await axios.get('http://localhost:8080/api/media-items/', { params });
        setMediaItems(response.data);
      } catch (error) {
        console.error('Failed to fetch media items', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMediaItems();
  }, [isWatched, searchParams]);

  return { mediaItems, loading };
};

// Custom hook to add a new media item
export const useAddMediaItem = () => {
  const toast = useToast();

  const addMediaItem = (formData, navigate) => {
    axios
      .post("http://localhost:8080/api/media-items/", formData)
      .then(response => {
        toast({
          title: "Media item added.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/");
      })
      .catch(error => {
        console.error("Error adding media item:", error);
        toast({
          title: "Error adding media item.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return { addMediaItem };
};

// Custom hook to update a media item (e.g., mark as watched and add rating)
export const useUpdateMediaItem = () => {
  const toast = useToast();

  const updateMediaItem = (itemId, updateData, onSuccess) => {
    axios
      .patch(
        `http://localhost:8080/api/media-items/${itemId}/modify/`,
        updateData
      )
      .then(response => {
        toast({
          title: "Media item updated.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        onSuccess(response.data);
      })
      .catch(error => {
        console.error("Error updating media item:", error);
        toast({
          title: "Error updating media item.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  return { updateMediaItem };
};
