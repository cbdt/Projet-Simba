package ressources;

import java.util.List;

import javax.enterprise.context.ApplicationScoped;
import javax.transaction.Transactional;
import javax.validation.Valid;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.WebApplicationException;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import models.Comment;
import models.Poll;

///polls/id/comments
@Path("/polls")
@ApplicationScoped
@Produces(MediaType.APPLICATION_JSON)
@Consumes(MediaType.APPLICATION_JSON)
public class CommentResource {

	/**
	 * 
	 * @param id
	 * @return tous les commentaires d'un poll
	 */
	@GET
	@Path("{/id/comments}")
	public List<Comment> getAllComments(@PathParam("id") Long id){
		Poll entity = Poll.findById(id);
		if(entity == null) {
			throw new WebApplicationException("Poll with id of " + id + " does not exist.", 404);
		}
		
		return entity.comments;
	}
	
	
	/**
	 * 
	 * @param id
	 * @return le commentaire dont l'id est IdComment d'un poll
	 */
	@GET
	@Path("{/id/comments/IdComment}")
	public Comment getOneComment(@PathParam("id") Long id, @PathParam("IdComment") Long Idcomment){
		Poll entity = Poll.findById(id);
		if(entity == null) {
			throw new WebApplicationException("Poll with id of " + id + " does not exist.", 404);
		}
		
		Comment comment = Comment.findById(Idcomment);
		int index = entity.comments.indexOf(comment);
		
		if(index < 0) {
			throw new WebApplicationException("comment with id of " + Idcomment + " does not exist in this poll.", 404);
		}
		
		return comment;
	}
	
	/**
	 * Crée un commentaire dans le poll specifié par l'ID
	 */
	@Transactional
	@POST
	@Path("{/id/comments}")
	public Comment create(@PathParam("id") Long id, @Valid Comment comment) {
		Poll entity = Poll.findById(id);
		
		if(entity == null) {
			throw new WebApplicationException("Poll with id of " + id + " does not exist.", 404);
		}
		
		comment.persist();
		entity.comments.add(comment);
		
		return comment;
		
	}
	
	/**
	 * Supprime un commentaire dans un poll 
	 */
	@DELETE
	@Transactional
	@Path("{/id/comments/IdComment}")
	public Response delete(@PathParam("id") Long id, @PathParam("IdComment") Long IdComment) {
		Poll entity = Poll.findById(id);
		if(entity == null) {
			throw new WebApplicationException("Poll with id of " + id + " does not exist.", 404);
		}
		
		Comment comment = Comment.findById(IdComment);
		
		if(comment == null) {
			throw new WebApplicationException("Comment with id of " + IdComment + " does not exist.", 404);
		}
		
		entity.comments.remove(comment);
		if(comment.isPersistent()) comment.delete();

		return Response.status(204).build();
	}
	
}
